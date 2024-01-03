package team.parentpal.localCSVIntegration;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;
import com.opencsv.exceptions.CsvException;

public class CSVIntegration {
  /*
   * 
   */
  public boolean saveCSV(String csvName, String[] csvRecord) {
    CSVReader csvReader;
    CSVWriter csvWriter;

    try {
      csvReader = new CSVReader(new FileReader(csvName + ".csv"));
      csvWriter = new CSVWriter(new FileWriter(csvName + ".csv", true));

      List<String[]> csvBody = new ArrayList<String[]>();
      csvBody.addAll(csvReader.readAll());
      csvBody.add(csvRecord);

      csvWriter.writeAll(csvBody);

      return true;

    } catch (IOException | CsvException e) {
      e.printStackTrace();
      return false;
    }
  }
}
