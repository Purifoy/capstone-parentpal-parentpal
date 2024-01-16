package team.parentpal.services;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.Date;

@Service
public class CurrentTimeService {

    public String getCurrentTime(String apiUrl) throws IOException {
        URL url = new URL(apiUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        try {
            if (connection.getResponseCode() == 200) {
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;

                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }

                JsonElement rootElement = JsonParser.parseString(response.toString());

                if (rootElement.isJsonObject()) {
                    JsonObject jsonObject = rootElement.getAsJsonObject();
                    return extractFormattedTime(jsonObject);
                } else {
                    System.out.println("Error: Unable to parse JSON response.");
                    return null;
                }
            } else {
                System.out.println("Error: Unable to fetch time. Status code: " + connection.getResponseCode());
                return null;
            }
        } finally {
            connection.disconnect();
        }
    }

    private String extractFormattedTime(JsonObject jsonObject) {
        String datetime = jsonObject.getAsJsonPrimitive("datetime").getAsString();
        return formatTime(datetime);
    }

    private String formatTime(String datetime) {
        try {
            // Parse the datetime string into a Date object
            ZonedDateTime zonedDateTime = ZonedDateTime.parse(datetime, DateTimeFormatter.ISO_OFFSET_DATE_TIME);
    
            // Format the Date object as a string in the desired format
            DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("EEE, dd MMM yyyy HH:mm:ss z");
            return zonedDateTime.format(outputFormatter);
        } catch (DateTimeParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}
