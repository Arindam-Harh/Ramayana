import { useState } from "react";
import "./Characters.css";

export const Characters = () => {
  const ramayanaCharacters = [
    {
      name: "Lord Vishnu",
      description: `Lord Vishnu is one of the supreme deities of Hinduism and the eternal preserver, protector, and sustainer of the universe. Within the sacred Trimurti—Brahma the creator, Vishnu the preserver, and Shiva the transformer—Vishnu is entrusted with maintaining cosmic order (dharma), protecting righteousness, preserving creation, and ensuring the balance between good and evil.

He resides in Vaikuntha, the eternal spiritual realm, accompanied by Goddess Lakshmi. He is often depicted reclining upon the cosmic serpent Adishesha in the Ocean of Milk, symbolizing eternity, divine consciousness, and transcendence over time and creation.

Lord Vishnu is portrayed with a blue complexion and four arms holding the Sudarshana Chakra (discus), Panchajanya Shankha (conch), Kaumodaki Gada (mace), and Padma (lotus), each representing divine justice, spiritual awakening, strength, wisdom, and purity.

Whenever righteousness declines and evil becomes dominant, Vishnu incarnates on earth in various avatars to restore dharma. His most celebrated incarnations include Rama and Krishna. In the Ramayana, he incarnates as Lord Rama to defeat Ravana, protect the righteous, and establish the ideals of truth, compassion, courage, and righteous leadership.

Vishnu is regarded as infinitely compassionate, merciful, patient, and protective toward his devotees. He is worshipped as the guardian of the universe and the supreme refuge of all beings, guiding souls toward liberation, peace, and eternal bliss.`,
    },

    {
      name: "Rama",
      description:
        "Rama is the central figure of the Ramayana and the eldest son of King Dasharatha and Queen Kausalya of Ayodhya. He is revered as the seventh avatar of Lord Vishnu and is regarded as the embodiment of dharma, righteousness, truth, and ideal conduct. Rama willingly accepted fourteen years of exile to honor his father’s promise, demonstrating his unwavering commitment to duty over personal comfort. During his exile, he protected sages from demons, formed alliances with the Vanaras, and inspired deep loyalty among his companions. After Ravana abducted Sita, Rama led a massive campaign against Lanka, ultimately defeating Ravana and restoring justice. His life is considered the ideal model of kingship, morality, compassion, courage, and self-discipline, and his reign, known as Rama Rajya, symbolizes justice, prosperity, and ethical governance.",
    },
    {
      name: "Sita",
      description:
        "Sita is the wife of Rama and is regarded as the incarnation of Goddess Lakshmi. She was found by King Janaka while plowing a sacred field and was raised as the princess of Mithila. Sita chose Rama as her husband during her swayamvara, where he lifted and strung the divine bow of Lord Shiva. She voluntarily accompanied Rama into exile, displaying extraordinary devotion and courage. Her abduction by Ravana became the central conflict of the Ramayana, yet she remained steadfast in her virtue and dignity despite immense suffering. Sita’s unwavering faith, resilience, compassion, and moral strength make her one of the most revered female figures in Indian tradition, representing purity, endurance, and spiritual power.",
    },
    {
      name: "Lakshmana",
      description:
        "Lakshmana, the younger brother of Rama and the son of Queen Sumitra, is the embodiment of loyalty, sacrifice, and brotherly devotion. He voluntarily left the comforts of the palace to accompany Rama and Sita into exile and dedicated himself entirely to their protection. Lakshmana remained constantly vigilant, built shelters, defended them from dangers, and fought numerous battles against powerful demons. His fierce temperament was balanced by his deep love and respect for Rama. During the war in Lanka, he played a decisive role by defeating Indrajit, Ravana’s mighty son. Lakshmana’s life symbolizes selfless service, unwavering dedication, and the willingness to sacrifice personal happiness for a higher duty.",
    },
    {
      name: "Bharata",
      description:
        "Bharata, the son of Queen Kaikeyi, is one of the noblest characters in the Ramayana. Although the throne of Ayodhya became available to him through his mother’s demands, he refused to accept a kingdom gained through injustice. Deeply distressed by Rama’s exile, Bharata traveled to the forest and pleaded with Rama to return. When Rama refused, Bharata placed Rama’s sandals on the throne and ruled as his representative, living an austere life while awaiting his brother’s return. His humility, integrity, selflessness, and devotion to righteousness make him an enduring example of ethical leadership and fraternal love.",
    },
    {
      name: "Shatrughna",
      description:
        "Shatrughna, the youngest son of King Dasharatha and Queen Sumitra, is often less prominent in the narrative but remains an important figure. He was deeply devoted to Bharata and played a crucial role in supporting him during Rama’s exile. Shatrughna was known for his discipline, administrative ability, and military skill. He later defeated the demon Lavanasura and established order in the kingdom of Mathura. His character represents quiet dedication, loyalty, and the importance of supporting righteousness even without seeking recognition or glory.",
    },
    {
      name: "Hanuman",
      description:
        "Hanuman, the son of the wind god Vayu and Anjana, is the greatest devotee of Rama and one of the most beloved figures in the Ramayana. Blessed with immense strength, intelligence, speed, and spiritual wisdom, he dedicated every aspect of his existence to serving Rama. Hanuman discovered Sita in Lanka, delivered Rama’s message to her, destroyed parts of Lanka, and later brought the Sanjeevani-bearing mountain to save Lakshmana’s life. Despite possessing extraordinary powers, he remained humble and free from ego. Hanuman symbolizes devotion, courage, humility, wisdom, and the limitless strength that arises from selfless service and faith.",
    },
    {
      name: "Ravana",
      description:
        "Ravana, the king of Lanka, was one of the most powerful and complex characters in the Ramayana. A brilliant scholar, master of the Vedas, skilled musician, accomplished warrior, and devoted worshiper of Lord Shiva, he possessed immense knowledge and extraordinary abilities. However, his greatness was overshadowed by arrogance, pride, lust, and an unwillingness to accept wise counsel. His abduction of Sita, despite repeated warnings from Vibhishana and Mandodari, ultimately led to his destruction. Ravana demonstrates that knowledge and power without humility, ethical restraint, and respect for dharma inevitably lead to downfall.",
    },
    {
      name: "Vibhishana",
      description:
        "Vibhishana, the younger brother of Ravana, was a righteous and spiritually inclined prince of Lanka. Throughout the conflict, he repeatedly advised Ravana to return Sita and avoid unnecessary destruction. When Ravana rejected his counsel and insulted him, Vibhishana chose to abandon his own kingdom and join Rama, placing righteousness above family loyalty. He provided valuable strategic information during the war and was later crowned king of Lanka after Ravana’s defeat. Vibhishana represents moral courage, ethical judgment, wisdom, and the principle that loyalty to truth is greater than loyalty to wrongdoing.",
    },
    {
      name: "Kumbhakarna",
      description:
        "Kumbhakarna, Ravana’s gigantic brother, was famous for his enormous strength and his supernatural sleep. Unlike Ravana, he clearly recognized that the abduction of Sita was wrong and openly criticized his brother’s actions. Nevertheless, he chose to fight for Lanka out of loyalty to his family and his sense of duty as a warrior. His immense courage and tragic fate make him one of the most sympathetic characters in the Ramayana. Kumbhakarna represents the conflict between personal morality and familial obligation.",
    },
    {
      name: "Shurpanakha",
      description:
        "Shurpanakha, the sister of Ravana, played a crucial role in initiating the central conflict of the Ramayana. After encountering Rama and Lakshmana in the forest, she became infatuated with Rama and reacted with anger when rejected. Her attack on Sita and the subsequent punishment she received led her to seek revenge by inciting Ravana to abduct Sita. Though often portrayed negatively, her actions serve as the catalyst that ultimately leads to Ravana’s downfall and the triumph of righteousness.",
    },
    {
      name: "Dasharatha",
      description:
        "King Dasharatha was the ruler of Ayodhya and the father of Rama, Bharata, Lakshmana, and Shatrughna. A courageous warrior and respected monarch, he deeply loved Rama and considered him the rightful heir to the throne. Bound by the promises he had once made to Kaikeyi, Dasharatha reluctantly sent Rama into exile, a decision that shattered him emotionally. Unable to bear the separation from his beloved son, he died grieving. Dasharatha’s life illustrates the power of promises, the burden of responsibility, and the tragic consequences of past actions.",
    },
    {
      name: "Kaikeyi",
      description:
        "Kaikeyi was one of the queens of Dasharatha and the mother of Bharata. She had once saved Dasharatha’s life in battle, and he granted her two boons. Influenced by her maid Manthara, Kaikeyi demanded that Bharata be crowned king and Rama be exiled for fourteen years. Her decision, though disastrous, became the turning point of the Ramayana and set the divine mission into motion. Kaikeyi’s character demonstrates how fear, insecurity, and manipulation can cloud judgment and produce far-reaching consequences.",
    },
    {
      name: "Janaka",
      description:
        "King Janaka of Mithila was the father of Sita and one of the wisest rulers in the Ramayana. A philosopher-king known for his spiritual knowledge and detachment, he discovered Sita while plowing a sacred field and raised her with great love and wisdom. He organized the swayamvara in which Rama won Sita’s hand by lifting Shiva’s bow. Janaka symbolizes enlightened leadership, humility, and the harmonious balance between worldly responsibility and spiritual realization.",
    },
    {
      name: "Sugriva",
      description:
        "Sugriva was the exiled king of the Vanaras and the younger brother of Vali. After being driven from his kingdom, he formed an alliance with Rama, who helped him regain the throne by defeating Vali. In return, Sugriva mobilized the Vanara forces to search for Sita and wage war against Lanka. Though he initially became distracted by royal pleasures, he ultimately honored his promise and became a loyal ally of Rama. Sugriva represents friendship, cooperation, and the importance of fulfilling one’s commitments.",
    },
    {
      name: "Vali",
      description:
        "Vali was the immensely powerful elder brother of Sugriva and one of the greatest warriors in the Ramayana. He possessed a boon that allowed him to absorb half the strength of any opponent who fought him directly. His conflict with Sugriva and his controversial death at the hands of Rama have been subjects of ethical debate for centuries. Vali was courageous, charismatic, and capable, but his pride and mistreatment of Sugriva ultimately led to his downfall. His story explores the complex relationship between justice, power, and kingship.",
    },
    {
      name: "Jatayu",
      description:
        "Jatayu was the noble king of the vultures and a close friend of King Dasharatha, the father of Rama. Although advanced in age, he displayed extraordinary courage when he saw Ravana abducting Sita through the skies. Refusing to remain a silent witness, Jatayu confronted Ravana and fought a fierce aerial battle to rescue Sita. He destroyed Ravana’s chariot and challenged him with remarkable valor, but Ravana eventually severed his wings with a divine weapon. Mortally wounded, Jatayu waited for Rama and Lakshmana and informed them about the direction in which Ravana had taken Sita. Rama embraced the dying Jatayu with great affection and personally performed his last rites, honoring him like a father. Jatayu’s sacrifice represents selfless courage, unwavering loyalty, devotion to righteousness, and the willingness to give one’s life in the defense of virtue and honor.",
    },
    {
      name: "Shabari",
      description:
        "Shabari was a humble ascetic and one of the greatest examples of pure devotion in the Ramayana. Born into a tribal community, she became a disciple of Sage Matanga and dedicated her life to spiritual service. Before his death, her guru promised that Lord Rama would one day visit her hermitage. For many years she patiently waited, cleaning the path, gathering fruits, and preparing her hermitage every day in anticipation of Rama’s arrival. When Rama finally came, Shabari offered him berries after tasting each one to ensure they were sweet. Although this would normally be considered improper, Rama accepted them with love because they were offered with complete sincerity and devotion. Shabari’s story teaches that God values the purity of the heart more than social status, wealth, ritual, or external appearance. She symbolizes faith, humility, patience, and unconditional devotion.",
    },
    {
      name: "Angada",
      description:
        "Angada was the son of the mighty Vanara king Vali and the wise queen Tara. After Vali’s death, Angada became an important member of Sugriva’s kingdom and a trusted ally of Rama. Despite the tragic circumstances surrounding his father’s death, he remained committed to righteousness and participated wholeheartedly in Rama’s mission to rescue Sita. Angada was renowned for his exceptional courage, intelligence, diplomatic skill, and loyalty. During the search for Sita, he led important expeditions, and in the war against Lanka he fought many powerful Rakshasa warriors. One of his most famous moments occurred when he visited Ravana’s court as Rama’s messenger and fearlessly challenged the king of Lanka, displaying confidence and moral authority. Angada represents youthful valor, integrity, leadership, and the ability to place dharma above personal resentment.",
    },
    {
      name: "Tara",
      description:
        "Tara was the queen of Kishkindha and the wife of Vali, and she is regarded as one of the wisest and most respected women in the Ramayana. She possessed remarkable intelligence, political wisdom, foresight, and emotional strength. Tara repeatedly advised Vali against confronting Sugriva without understanding the circumstances, recognizing that powerful forces were at work. After Vali’s death, she accepted the tragic reality with dignity and played a crucial role in stabilizing the kingdom. She later supported Sugriva’s alliance with Rama and encouraged Angada to serve the cause of righteousness. Tara’s counsel was valued even by great warriors and rulers, demonstrating that wisdom and diplomacy are as important as physical strength. She symbolizes wisdom, compassion, resilience, and responsible leadership during times of crisis.",
    },
    {
      name: "Mandodari",
      description:
        "Mandodari was the chief queen of Ravana and one of the noblest characters in the Ramayana. She was renowned for her wisdom, virtue, compassion, and deep understanding of dharma. Throughout the conflict, Mandodari repeatedly urged Ravana to return Sita and make peace with Rama, recognizing that his pride and obsession would lead to the destruction of Lanka. She warned him that no kingdom, power, or victory could survive when righteousness was abandoned. Despite being the queen of a mighty empire, she remained humble and morally grounded. After Ravana’s death, her grief reflected not only the loss of her husband but also the tragedy of a great man destroyed by his own arrogance. Mandodari represents moral courage, wisdom, and the painful consequences of ignoring righteous counsel.",
    },
    {
      name: "Meghanada (Indrajit)",
      description:
        "Meghanada, popularly known as Indrajit, was the eldest son of Ravana and one of the greatest warriors in the Ramayana. He earned the title ‘Indrajit’ after defeating Indra, the king of the gods, and was considered nearly invincible in battle. A master of celestial weapons, illusion, and magical warfare, he possessed extraordinary military skill and strategic intelligence. During the war in Lanka, he severely wounded both Rama and Lakshmana and repeatedly challenged the Vanara army with devastating attacks. However, his power depended on certain sacred rituals and divine protections, and Lakshmana eventually defeated him after interrupting one of his rituals. Indrajit was brave, disciplined, and devoted to his father, but his loyalty to an unrighteous cause ultimately led to his destruction. He symbolizes immense talent and valor misdirected by allegiance to adharma.",
    },
    {
      name: "Urmila",
      description:
        "Urmila was the wife of Lakshmana and the younger sister of Sita, yet her sacrifice is among the most profound in the Ramayana. When Lakshmana chose to accompany Rama into exile for fourteen years, Urmila accepted years of separation without complaint, allowing her husband to fulfill his sacred duty. Many traditional narratives describe her as silently bearing loneliness and emotional hardship while remaining devoted to her family and dharma. Unlike Sita, who accompanied Rama into the forest, Urmila served through patience, restraint, and quiet endurance. Her sacrifice often receives less attention, but it reflects extraordinary emotional strength and selflessness. Urmila symbolizes silent devotion, inner resilience, and the unseen sacrifices made by those who support great ideals from the background.",
    },
    {
      name: "Vashistha",
      description:
        "Vashistha was the royal guru of the Ikshvaku dynasty and one of the greatest sages of ancient India. He served as the spiritual guide and advisor to King Dasharatha and later to Rama. Renowned for his mastery of the Vedas, meditation, ethics, and statecraft, Vashistha played a central role in shaping the moral and spiritual foundations of Ayodhya. He conducted important royal ceremonies, advised the kings during moments of crisis, and consistently upheld the principles of dharma. His wisdom, calmness, and compassion made him a pillar of stability within the kingdom. Vashistha’s teachings emphasized self-control, righteousness, truth, and the harmony between spiritual knowledge and worldly responsibility. He represents the ideal guru whose guidance protects both individuals and society.",
    },
    {
      name: "Vishwamitra",
      description:
        "Vishwamitra was one of the most extraordinary sages in the Ramayana, celebrated for his spiritual power, determination, and transformative journey from king to Brahmarishi. He took Rama and Lakshmana from Ayodhya to protect his sacred sacrifices from demons such as Tataka and Subahu. During this period, he trained them in the use of divine weapons, celestial mantras, and the responsibilities of a warrior dedicated to righteousness. Vishwamitra also led them to Mithila, where Rama ultimately married Sita after breaking the bow of Shiva. His life is a remarkable story of perseverance, discipline, and spiritual achievement, demonstrating that greatness can be attained through relentless effort and self-mastery. He symbolizes determination, wisdom, and the power of disciplined transformation.",
    },
    {
      name: "Ahalya",
      description:
        "Ahalya was the wife of Sage Gautama and was celebrated for her extraordinary beauty and virtue. According to the Ramayana, she became the victim of a tragic deception involving Indra and was subsequently cursed by her husband. As a result, she remained in a state of isolation and penance for many years, often described as being transformed into stone or existing in an invisible state. When Rama visited Gautama’s hermitage during his journey with Vishwamitra, his divine presence liberated Ahalya from the curse and restored her to her original form. Her redemption emphasized compassion, forgiveness, and the transformative power of divine grace. Ahalya’s story represents repentance, spiritual purification, hope, and the possibility of renewal even after profound suffering and error.",
    },
  ];
  const [count, setCount] = useState(0);
  const handleCountD = (e) => {
    e.preventDefault();
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const handleCountI = (e) => {
    e.preventDefault();
    if (count >= ramayanaCharacters.length - 1) {
      setCount(ramayanaCharacters.length - 1);
    } else {
      setCount(count + 1);
    }
  };
  const progress = (count + 1) / ramayanaCharacters.length;
  const hue = 5 + progress * 43; // 5° (crimson) → 48° (gold)
  return (
    <div className="container">
      <h1>All Characters of Ramayana</h1>

      <div className="progress-container">
        <p className="counter">
          Character {count + 1} of {ramayanaCharacters.length}
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((count + 1) / ramayanaCharacters.length) * 100}%`,
              background:
                count < ramayanaCharacters.length * 0.12
                  ? "linear-gradient(90deg, #7a0000, #9b111e)"
                  : count < ramayanaCharacters.length * 0.24
                    ? "linear-gradient(90deg, #9b111e, #c21807)"
                    : count < ramayanaCharacters.length * 0.36
                      ? "linear-gradient(90deg, #c21807, #d84315)"
                      : count < ramayanaCharacters.length * 0.48
                        ? "linear-gradient(90deg, #d84315, #ef6c00)"
                        : count < ramayanaCharacters.length * 0.6
                          ? "linear-gradient(90deg, #ef6c00, #fb8c00)"
                          : count < ramayanaCharacters.length * 0.72
                            ? "linear-gradient(90deg, #fb8c00, #f9a825)"
                            : count < ramayanaCharacters.length * 0.84
                              ? "linear-gradient(90deg, #f9a825, #fbc02d)"
                              : count < ramayanaCharacters.length * 0.94
                                ? "linear-gradient(90deg, #fbc02d, #ffd54f)"
                                : "linear-gradient(90deg, #ffd54f, #ffec8b, #fff3b0)",
            }}
          />
        </div>
      </div>

      <div className="character-layout">
        <button
          className="nav-btn"
          onClick={handleCountD}
          disabled={count === 0}
        >
          ❮
        </button>

        <div className="main">
          <h2>{ramayanaCharacters[count].name}</h2>
          <p>{ramayanaCharacters[count].description}</p>
        </div>

        <button
          className="nav-btn"
          onClick={handleCountI}
          disabled={count === ramayanaCharacters.length - 1}
        >
          ❯
        </button>
      </div>
    </div>
  );
};
