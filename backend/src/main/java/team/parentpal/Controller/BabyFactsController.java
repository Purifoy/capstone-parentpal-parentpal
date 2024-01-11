package team.parentpal.controller;

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
            "A baby's brain is incredibly active and forms neural connections at a rapid pace during the first years of life.",
            "A baby's brain is incredibly active and forms neural connections at a rapid pace during the first years of life.",
            "Babies are born with a natural swimming ability and can hold their breath reflexively when submerged in water.",
            "Newborns have a strong grip reflex, and they can actually support their own body weight if held upright.",
            "A baby's taste buds are more sensitive than adults', which may explain their initial aversion to certain flavors.",
            "Babies spend most of their time in rapid eye movement (REM) sleep, which is crucial for brain development.",
            "Newborns have a unique reflex called the Moro reflex, causing them to startle in response to sudden movements or loud noises.",
            "Babies are born with the ability to imitate facial expressions, a precursor to their social and emotional development.",
            "A newborn's stomach is tiny, about the size of a cherry, which is why they need frequent but small feedings.",
            "Babies have a remarkable ability to differentiate between different languages and can mimic various sounds from an early age.",
            "The soft spot on a baby's head, called the fontanelle, allows for the baby's skull to be flexible during birth and early development.",
            "Babies have a heightened sensitivity to touch, and skin-to-skin contact is crucial for their emotional well-being.",
            "Babies are born with an innate ability to mimic facial expressions within the first few days of life.",
            "Newborns have a higher heart rate than adults, averaging around 120 to 160 beats per minute.",
            "A baby's sense of taste is well-developed, and they can distinguish between sweet, sour, salty, and bitter flavors.",
            "Babies have a natural reflex called the stepping reflex, where they make stepping movements when held upright with their feet touching a surface.",
            "Newborns often have a fine layer of hair called lanugo covering their bodies, which typically falls off in the first few weeks.",
            "Babies may exhibit the Babinski reflex, where their toes fan out and the big toe bends upward when the sole of the foot is stroked.",
            "A baby's eyes are approximately 75% of their adult size at birth.",
            "Babies develop a social smile around 6 to 8 weeks of age, expressing happiness in response to social stimuli.",
            "Newborns have a heightened sensitivity to the sound of their mother's heartbeat, which can have a calming effect.",
            "Babies can recognize familiar faces, particularly those of their parents, within a few weeks of birth.",
            "A baby's sense of touch is so advanced that they can feel pain and respond to gentle strokes and caresses.",
            "Babies experience rapid growth in the first year, doubling their birth weight by around 6 months of age.",
            "Newborns have a natural startle reflex, throwing their arms out and then pulling them back in when they feel a sudden movement or noise",
            "A baby's first teeth, usually the lower central incisors, typically start to emerge around 6 months of age.",
            "Babies have a strong preference for human faces over other visual stimuli, showing their social nature.",
            "Newborns have a unique scent that can be recognized by their parents, contributing to the bonding process.",
            "A baby's sense of balance and coordination gradually improves as they gain control over their muscles.",
            "Babies can display the tonic neck reflex, assuming a 'fencing' position when their head is turned to one side.",
            "Newborns have a heightened sense of hearing, enabling them to respond to various tones and pitches.",
            "A baby's sleep patterns change as they grow, with longer periods of nighttime sleep and shorter naps during the day.",
            "Babies develop the ability to roll over from front to back and vice versa around 4 to 6 months of age.",
            "Newborns have a soft spot on the back of their head, known as the posterior fontanelle, which typically closes within a few months.",
            "A baby's immune system is strengthened by antibodies received from their mother during pregnancy and through breast milk.",
            "Babies can recognize their own reflection in a mirror by the age of 9 to 12 months.",
            "Newborns have a higher number of red blood cells than adults, providing them with efficient oxygen transport.",
            "A baby's sense of smell is developed enough to prefer the scent of their mother's milk over other smells.",
            "Babies respond to music and rhythmic sounds, which can have a soothing effect on them.",
            "Newborns may display the grasp reflex, involuntarily grabbing onto objects placed in their hands.",
            "A baby's skin is more permeable than an adult's, making it sensitive to the chemicals in certain skincare products.",
            "Babies can recognize and imitate simple gestures, such as waving bye-bye, around 8 to 12 months of age."

    );

    @GetMapping("/babyfact")
    public String getBabyFact() {
        Random random = new Random();
        int index = random.nextInt(babyFacts.size());
        return babyFacts.get(index);
    }
}
