/*
 * This class is used to integrate the backend with the local CSV files
 * @Author: Joshua Anderson
 * @Version: 1.0
 * @Date: 1/3/2024
 * @Last Modified By: ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified Time: 1/4/2024
 * @Last Modified Description: Added a CSVToJsonConverter method and a 
 * JsonToCSVConverter method to allow for the conversion of CSV files 
 * to JSON objects and vice versa; This will allow working data in the 
 * system to remain in JSON format until saved to CSV. 
 * @Dependencies: com.opencsv.CSVReader, com.opencsv.CSVWriter, com.opencsv.exceptions.CsvException, java.io.FileReader, java.io.* FileWriter, java.io.IOException, java.util.ArrayList, java.util.List
 */

package team.parentpal.localCSVIntegration;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.opencsv.exceptions.CsvException;
import org.json.JSONArray;
import org.json.JSONObject;

public class CSVIntegration {
  /*
   * Retrieve the CSV file, add the provided record to it, and save it to the
   * database
   * 
   * @param csvName: the name of the CSV file to be read - excluding the .csv
   * extension
   * 
   * @param csvRecord: the record to be added to the CSV file
   */
  public boolean saveCSV(String csvName, String[] csvRecord) {
    // CSVReader csvReader;
    CSVWriter csvWriter;

    try {
      csvWriter = new CSVWriter(new FileWriter("./src/main/resources/records/" + csvName + ".csv", true));

      List<String[]> csvBody = new ArrayList<String[]>();

      csvBody.add(csvRecord);

      csvWriter.writeAll(csvBody);

      return true;

    } catch (IOException e) {
      e.printStackTrace();
      return false;
    }
  }

  /*
   * Retrieve the CSV file and return its contents as a list of String arrays
   * 
   * @param csvName: the name of the CSV file to be read - excluding the .csv
   * extension
   * 
   */
  public List<String[]> readCSV(String csvName) {
    CSVReader csvReader;

    try {
      csvReader = new CSVReader(new FileReader("./src/main/resources/records/" + csvName + ".csv"));
      List<String[]> csvBody = new ArrayList<String[]>();
      csvBody.addAll(csvReader.readAll());

      for (String[] csvRecord : csvBody) {
        for (String csvField : csvRecord) {
          System.out.print(csvField + " ");
        }
        System.out.println();
      }

      return csvBody;
    } catch (IOException | CsvException e) {
      e.printStackTrace();
      return null;
    }
  }

  public JSONObject CSVToJsonConverter(List<String[]> csvBody) {
    JSONArray jsonArray = new JSONArray();
    String[] header = csvBody.get(0);
    for (int i = 1; i < csvBody.size(); i++) {
      String[] csvRecord = csvBody.get(i);
      JSONObject jsonObject = new JSONObject();
      for (int j = 0; j < csvRecord.length; j++) {
        jsonObject.put(header[j], csvRecord[j]);
      }
      jsonArray.put(jsonObject);
    }

    JSONObject finalObject = new JSONObject();
    finalObject.put("records", jsonArray);

    return finalObject;
  }

  public List<String[]> JsonToCSVConverter(JSONObject jsonObject) {
    JSONArray jsonArray = jsonObject.getJSONArray("records");
    List<String[]> csvBody = new ArrayList<String[]>();
    if (jsonArray.length() > 0) {
      JSONObject firstRecord = jsonArray.getJSONObject(0);
      String[] header = JSONObject.getNames(firstRecord);
      csvBody.add(header);
      for (int i = 0; i < jsonArray.length(); i++) {
        JSONObject record = jsonArray.getJSONObject(i);
        String[] csvRecord = new String[record.length()];
        for (int j = 0; j < record.length(); j++) {
          csvRecord[j] = record.getString(header[j]);
        }
        csvBody.add(csvRecord);
      }
    }
    return csvBody;
  }

}