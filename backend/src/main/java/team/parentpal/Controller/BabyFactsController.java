package team.parentpal.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api")
public class BabyFactsController {

    private static final List<String> babyFacts = Arrays.asList(
            "Babies are born with 300 bones, but as they grow, the number of bones decreases to 206.",
            "Newborns can only see in black and white during their early weeks.",
            "Babies have a strong sense of smell and can recognize the scent of their mother.",
            "A baby's cry can trigger a response in adults, releasing hormones that make them more attentive.",
            "Babies start to develop their taste preferences before birth based on the flavors of the amniotic fluid.",
            "Newborns have a natural instinct for breastfeeding, often called the 'breast crawl.'",
            "Babies can distinguish their mother's voice from other voices soon after birth.",
            "A baby's brain is incredibly active and forms neural connections at a rapid pace during the first years of life."
    );

    @GetMapping("/babyfact")
    public String getBabyFact() {
        Random random = new Random();
        int index = random.nextInt(babyFacts.size());
        return babyFacts.get(index);
    }
}

