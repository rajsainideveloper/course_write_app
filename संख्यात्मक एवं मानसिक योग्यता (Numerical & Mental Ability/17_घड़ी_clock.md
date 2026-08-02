# घड़ी (Clock)

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा के लिए घड़ी परीक्षण का एक गहन, वैज्ञानिक और परीक्षा-उन्मुख पाठ्यक्रम जो तार्किक दक्षता और मानसिक क्षमता को सर्वोच्च स्तर पर ले जाता है।

## Chapter 17: घड़ी और समय मापन (Clocks and Time Measurement)

### Section 1 | घड़ी की संरचना और सुइयों की बुनियादी गति

घड़ी परीक्षण रीजनिंग का एक अत्यंत स्कोरिंग और विश्लेषणात्मक भाग है। एक मानक एनालॉग घड़ी में एक वृत्ताकार डायल होता है जिसे 360° के कोण में विभाजित किया जाता है। इस डायल पर 1 से 12 तक के अंक अंकित होते हैं, जिसके कारण प्रत्येक दो क्रमिक अंकों के बीच का कोण =360°/12 = 30° होता है।

- **घंटे की सुई (Hour Hand):** यह 12 घंटे में पूरा 360° का चक्कर लगाती है।

- 1 घंटे में तय दूरी = 360° / 12 = 30°
- 1 मिनट में तय दूरी = 30° / 60 = 0.5°
- **मिनट की सुई (Minute Hand):** यह 60 मिनट (1 घंटे) में पूरा 360° का चक्कर लगाती है।

- 1 मिनट में तय दूरी = 360° / 60 = 6°
- **सापेक्ष गति (Relative Speed):** मिनट की सुई घंटे की सुई से 1 मिनट में =  (या ) आगे निकलती है।
HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 350" width="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>
  
  <rect width="800" height="350" rx="12" fill="url(#bgGrad)" />
  
  <!-- Box 1 -->
  <g transform="translate(40, 40)" filter="url(#shadow)">
    <rect width="220" height="270" rx="10" fill="url(#cardGrad)" />
    <text x="110" y="40" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">घंटे की सुई</text>
    <text x="25" y="90" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• 12 घंटे = 360°</text>
    <text x="25" y="140" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• 1 घंटा = 30°</text>
    <text x="25" y="190" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• 1 मिनट = 0.5°</text>
    <text x="25" y="235" fill="#34D399" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold">($1/2$° प्रति मिनट)</text>
  </g>

  <!-- Box 2 -->
  <g transform="translate(290, 40)" filter="url(#shadow)">
    <rect width="220" height="270" rx="10" fill="url(#cardGrad)" />
    <text x="110" y="40" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">मिनट की सुई</text>
    <text x="25" y="90" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• 60 मिनट = 360°</text>
    <text x="25" y="140" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• 1 मिनट = 6°</text>
    <text x="25" y="190" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• 10 मिनट = 60°</text>
    <text x="25" y="235" fill="#34D399" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold">(तेज़ गति से भ्रमण)</text>
  </g>

  <!-- Box 3 -->
  <g transform="translate(540, 40)" filter="url(#shadow)">
    <rect width="220" height="270" rx="10" fill="url(#cardGrad)" />
    <text x="110" y="40" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">सापेक्ष गति (Diff)</text>
    <text x="25" y="90" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• सापेक्ष चाल = $5.5$°</text>
    <text x="25" y="140" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• $\frac{11}{2}$° प्रति मिनट</text>
    <text x="25" y="190" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="14">• अंतराल पाटने हेतु</text>
    <text x="25" y="235" fill="#34D399" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold">उपयोगी शॉर्टकट</text>
  </g>
</svg>
```

### Section 2 | कोण आधारित प्रश्न और मानक सूत्र

जब घड़ी में कोई विशेष समय हो, तो घंटे और मिनट की सुइयों के बीच बनने वाले कोण को ज्ञात करने के लिए अचूक सूत्र का प्रयोग किया जाता है।

- =कोण

- जहाँ  = दिए गए घंटे का मान (जैसे 4 बजे के लिए 4)
- = मिनटों की संख्या

[alert type="success"]
**Important Fact:** किसी भी समय पर दो कोण बनते हैं—एक आंतरिक कोण () और दूसरा बाह्य कोण ()। यदि विकल्प में आंतरिक कोण न मिले, तो 360° से घटाकर बाह्य कोण का चयन करें।
[/alert]

[example]
**Question:** यदि किसी घड़ी में 4 बजकर 40 मिनट हो रहे हैं, तो दोनों सुइयों के बीच का कोण ज्ञात कीजिए।
**Solution:**
यहाँ  और भूमिगत सूत्र में मान रखने पर :

अतः दोनों सुइयों के बीच का अभीष्ट कोण **100°** है।
[/example]

### Section 3 | समय निर्धारण और विशेष स्थितियाँ (0°, 90°, 180°)

घड़ी की सुइयों की स्थितियाँ परीक्षा में बार-बार पूछी जाती हैं। इनकी आवृत्तियाँ और समय अंतराल निम्नलिखित हैं:

| स्थिति (Position) |कोण () |1 घंटे में बार |12 घंटे में बार |24 घंटे में बार |समय अंतराल निकालने का सूत्र |
| **संपाती (Coincidence)** |0° |1 बार |11 बार |22 बार | |
| **विपरीत (Opposite)** |180° |1 बार |11 बार |22 बार | |
| **समकोण (Right Angle)** |90° |2 बार |22 बार |44 बार | |

[alert type="warning"]
**Warning Trap:** 12 से 1 बजे के बीच घड़ी की सुइयां आपस में कभी संपाती नहीं होतीं (यह ठीक 12 बजे मिलती हैं), इसी प्रकार 5 से 7 के बीच विपरीत स्थिति केवल 1 बार (6 बजे) बनती है। परीक्षा में यही समयांतराल भ्रांति पैदा करते हैं।
[/alert]

[example]
**Question:** 4 और 5 बजे के बीच किस समय घड़ी की दोनों सुइयां एक-दूसरे के संपाती (0° का कोण) होंगी?
**Solution:**
संपाती स्थिति का सूत्र: 
यहाँ प्रथम घंटा  है।

अतः अभीष्ट समय **4 बजकर  मिनट** होगा।
[/example]

### Section 4 | दोषपूर्ण घड़ी (Faulty / Slow & Fast Clocks)

जब कोई घड़ी खराब हो जाती है, बहुत तेज़ (Fast) या बहुत धीमी (Slow) चलती है, तो सही समय ज्ञात करने के लिए अनुपात (Ratio) विधि का प्रयोग किया जाता है।

[flashcards title="दोषपूर्ण घड़ी के नियम"]

| अवधारणा |विवरण / सूत्र |
| **धीमी घड़ी (Slow)** |कुल खोया हुआ समय = (धीमी दर  कुल बिताया गया समय) |
| **तेज़ घड़ी (Fast)** |कुल अतिरिक्त समय = (तेज़ दर  कुल बिताया गया समय) |
| **सही समय मिलान** | |
| **कुल चक्र (12 घंटे मेल)** |एक मानक घड़ी 12 घंटे में एक बार अपनी सही स्थिति पुनः प्राप्त करती है। |
| [/flashcards] | |

### Section 5 | उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा विशेष रणनीति और अभ्यास प्रश्न

[quiz title="UP Police Constable Clock Quiz"]
Q: एक घड़ी में 3 बजकर 20 मिनट का समय हो रहा है। घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनेगा?

- A) 10°
- B) 20° (Correct: )
- C) 30°
- D) 40°

Q: 7 और 8 बजे के बीच किस समय घड़ी की दोनों सुइयां एक सीधी रेखा में होंगी लेकिन विपरीत दिशाओं में होंगी (180°)?

- A) 7 बजकर  मिनट
- B) 7 बजकर  मिनट (Correct:  मिनट, लेकिन विपरीत के लिए  अर्थात , चूँकि 7 बजे के लिए  है तो  मिनट; सही उत्तर  है)
- C) 7 बजकर  मिनट
- D) 7 बजकर  मिनट

Q: एक दीवार घड़ी प्रत्येक 24 घंटे में 10 मिनट सुस्त (धीमी) हो जाती है। यदि उसे सोमवार को सुबह 8:00 बजे सही सेट किया गया था, तो बुधवार को सुबह 8:00 बजे यह घड़ी क्या समय दिखाएगी?

- A) सुबह 7:40 बजे
- B) सुबह 7:50 बजे (Correct: 48 घंटे में कुल 20 मिनट धीमी होगी, अतः 8:00 बजे में से 20 मिनट घटाने पर 7:50 बजे प्राप्त होगा)
- C) सुबह 8:10 बजे
- D) सुबह 7:30 बजे
[/quiz]