package team.parentpal.controller;

import java.io.IOException;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import team.parentpal.services.CurrentTimeService;

@Controller
public class HomeController {

    private final CurrentTimeService currentTimeService;

    public HomeController(CurrentTimeService currentTimeService) {
        this.currentTimeService = currentTimeService;
    }

    @GetMapping("/api/clock")
    public String home(@RequestHeader(name = "timezone", required = false) String timezone, Model model) {
        try {
            String currentTime = currentTimeService.getCurrentTime("http://worldtimeapi.org/api/ip");

            DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
            ZonedDateTime zonedDateTime = ZonedDateTime.parse(currentTime, formatter);

            if (timezone != null && !timezone.isEmpty()) {
                zonedDateTime = zonedDateTime.withZoneSameInstant(ZoneId.of(timezone));
            }

            String formattedTime = zonedDateTime.format(formatter);

            model.addAttribute("currentTime", formattedTime);
        } catch (IOException e) {
            e.printStackTrace();
            model.addAttribute("currentTime", null);
        }
        return "index";
    }
}
