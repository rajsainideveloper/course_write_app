# संख्या श्रृंखला (संख्यात्मक योग्यता एवं तार्किक विश्लेषण)

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा के अभ्यर्थियों के लिए संख्या पैटर्न, तार्किक अनुक्रम और उन्नत विश्लेषण की एक व्यापक मार्गदर्शिका।

## Chapter 29: संख्या श्रृंखला (Number Series)

### Section 1 | संख्या श्रृंखला का परिचय एवं महत्व

संख्या श्रृंखला (Number Series) उत्तर प्रदेश पुलिस कांस्टेबल और अन्य प्रतियोगी परीक्षाओं का एक अति महत्वपूर्ण भाग है। यह परीक्षण केवल आपकी गणना क्षमता का नहीं, बल्कि संख्याओं के बीच छिपे सूक्ष्म तार्किक संबंधों को कम से कम समय में पहचानने की आपकी मानसिक क्षमता का मूल्यांकन करता है। परीक्षा में इस खंड से सीधे तौर पर 3 से 5 प्रश्न पूछे जाते हैं, जो मेरिट निर्धारण में निर्णायक भूमिका निभाते हैं।

श्रृंखला में दिए गए पदों का एक निश्चित तार्किक नियम या क्रम होता है। अभ्यर्थी को उस अंतर्निहित पैटर्न को समझकर या तो श्रृंखला की अगली संख्या ज्ञात करनी होती है या बीच की किसी लुप्त (Missing) संख्या को ढूंढना होता है।

[alert type="info"]
**Important Fact:** संख्या श्रृंखला के प्रश्नों को हल करने के लिए संख्याओं के वर्ग (Squares), घन (Cubes), अभाज्य संख्याएं (Prime Numbers) और क्रमिक अंतर (Successive Differences) का तीव्र मानसिक अभ्यास होना अनिवार्य है।
[/alert]

### Section 2 | श्रृंखला के प्रमुख प्रकार एवं गणितीय पैटर्न

संख्याओं के बीच का संबंध विभिन्न गणितीय संक्रियाओं पर आधारित हो सकता है। प्रमुख पैटर्न निम्नलिखित हैं:

- **सरल अंतर श्रृंखला (Simple Difference Series):** पदों के बीच का अंतर या तो समान होता है या एक निश्चित क्रम में बढ़ता/घटता है।
- **दोहरा अंतर श्रृंखला (Double Difference Series):** जब प्रथम स्तर के अंतर से पैटर्न स्पष्ट न हो, तब अंतरों का भी अंतर (Difference of Differences) ज्ञात किया जाता है।
- **गुणोत्तर या ज्यामितीय श्रृंखला (Geometric Series):** इसमें प्रत्येक अगली संख्या पिछली संख्या में किसी निश्चित संख्या से गुणा या भाग करके प्राप्त की जाती है।
- **वर्ग और घन श्रृंखला (Squares and Cubes Series):** संख्याएं पूर्ण वर्ग, पूर्ण घन या उनमें कुछ निश्चित संख्या जोड़ने/घटाने पर आधारित होती हैं।
- **मिश्रित श्रृंखला (Mixed Series):** इसमें एक ही श्रृंखला में दो अलग-अलग पैटर्न एकांतर (Alternate) रूप से चल रहे होते हैं या दो संक्रियाओं (जैसे गुणा और जोड़) का संयोजन होता है।

[flashcards title="महत्वपूर्ण संख्या मान (1 से 30 तक वर्ग और 1 से 15 तक घन)"]

| संख्या का प्रकार |मानक सीमा / मान |परीक्षा उपयोगिता |
| **वर्ग (Squares)** |से |तीव्र गणना के लिए सीधा स्मरण |
| **घन (Cubes)** |से |उच्च स्तर के श्रृंखला प्रश्नों हेतु |
| **अभाज्य संख्याएं (Primes)** |2, 3, 5, 7, 11, 13, 17, 19, 23, 29 |तार्किक श्रृंखलाओं का आधार |
| **फैक्टोरियल (Factorials)** |से |विशेष अनुक्रम पैटर्न |
| [/flashcards] | | |

### Section 3 | तार्किक प्रवाह और पैटर्न पहचान वास्तुकला

संख्या श्रृंखला में छिपे संबंधों को पहचानने की मानसिक प्रक्रिया को निम्नलिखित योजनाबद्ध आरेख द्वारा समझा जा सकता है:

HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#0D9488" />
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.15"/>
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748B"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" fill="#F8FAFC" rx="12"/>

  <!-- Title -->
  <text x="400" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="#1E3A8A" text-anchor="middle">संख्या श्रृंखला विश्लेषण प्रक्रिया</text>

  <!-- Step 1 -->
  <rect x="50" y="80" width="200" height="80" rx="10" fill="url(#grad1)" filter="url(#shadow)"/>
  <text x="150" y="115" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">चरण 1: अंतर जांचें</text>
  <text x="150" y="135" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">प्राथमिक अंतर (Diff) निकालें</text>

  <!-- Step 2 -->
  <rect x="300" y="80" width="200" height="80" rx="10" fill="url(#grad1)" filter="url(#shadow)"/>
  <text x="400" y="115" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">चरण 2: द्वितीयक अंतर</text>
  <text x="400" y="135" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">अंतर का अंतर (Double Diff)</text>

  <!-- Step 3 -->
  <rect x="550" y="80" width="200" height="80" rx="10" fill="url(#grad1)" filter="url(#shadow)"/>
  <text x="650" y="115" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">चरण 3: गुणन/भाग</text>
  <text x="650" y="135" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">तेजी से बढ़ने पर गुणा जांचें</text>

  <!-- Connectors Row 1 -->
  <path d="M 250 120 L 300 120" stroke="#64748B" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M 500 120 L 550 120" stroke="#64748B" stroke-width="2" fill="none" marker-end="url(#arrow)"/>

  <!-- Row 2 -->
  <rect x="550" y="220" width="200" height="80" rx="10" fill="url(#grad2)" filter="url(#shadow)"/>
  <text x="650" y="255" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">चरण 4: वर्ग/घन नियम</text>
  <text x="650" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">+$n^2$ या $-n^3$ पैटर्न</text>

  <path d="M 650 160 L 650 220" stroke="#64748B" stroke-width="2" fill="none" marker-end="url(#arrow)"/>

  <!-- Row 3 Left -->
  <rect x="300" y="220" width="200" height="80" rx="10" fill="url(#grad2)" filter="url(#shadow)"/>
  <text x="400" y="255" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">चरण 5: मिश्रित श्रृंखला</text>
  <text x="400" y="275" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#E2E8F0" text-anchor="middle">एकांतर (Alternate) पद</text>

  <path d="M 550 260 L 500 260" stroke="#64748B" stroke-width="2" fill="none" marker-end="url(#arrow)"/>

  <!-- Conclusion Box -->
  <rect x="175" y="350" width="450" height="90" rx="10" fill="#1E3A8A" filter="url(#shadow)"/>
  <text x="400" y="385" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">अतिमिश्रित एवं विशिष्ट पैटर्न</text>
  <text x="400" y="415" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0" text-anchor="middle">=अभाज्य संख्या + मिश्रित संक्रिया (जैसे $\times 2 + 1$)=</text>

  <path d="M 300 260 L 250 260 L 250 350" stroke="#64748B" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
</svg>
```

### Section 4 | हल किए गए उदाहरण (Solved Examples)

[example]
**Question:** दी गई श्रृंखला में लुप्त संख्या ज्ञात कीजिए:
4, 9, 19, 39, 79, ?
**Solution:**
पदों का क्रमिक अंतर और संबंध इस प्रकार है:

- 
- 
- 
- 
- इसी प्रकार अगला पद: 
**उत्तर:** 159
[/example]

[example]
**Question:** निम्नलिखित संख्या श्रृंखला में अगली संख्या क्या होगी?
12, 13, 17, 26, 42, ?
**Solution:**
प्रत्येक पद के बीच का अंतर ज्ञात करते हैं:

- ()
- ()
- ()
- ()
अंतर एक पूर्ण वर्ग श्रृंखला () बना रहे हैं। अतः अगला अंतर  होगा।
- लुप्त संख्या = 
**उत्तर:** 67
[/example]

### Section 5 | परीक्षा रणनीति एवं सामान्य त्रुटियाँ (Exam Traps)

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में समय प्रबंधन सबसे महत्वपूर्ण घटक है। श्रृंखला के प्रश्नों में छात्र अक्सर निम्नलिखित त्रुटियां करते हैं:

- **गलत दिशा में सोचना:** जब संख्याएं तेजी से बढ़ रही हों, तब अंतर निकालने में समय बर्बाद न करें; सीधे गुणन (Multiplication) या वर्ग/घन पैटर्न की जांच करें।
- **अति-जटिलता (Over-complication):** कई बार श्रृंखला बहुत सरल होती है लेकिन अभ्यर्थी उसमें जटिल बीजगणितीय नियम खोजने लगते हैं। हमेशा सरल अंतर से शुरुआत करें।
- **ऋणात्मक और धनात्मक चिह्नों की भूल:** घटती हुई श्रृंखला (Decreasing Series) में घटाव या भाग के नियम को ध्यान से परखें।

[alert type="warning"]
**Warning Trap:** परीक्षा में कई बार प्रश्न पत्र में प्रिंटिंग त्रुटि या भ्रमित करने के लिए दो अलग-अलग नियमों का पालन करने वाले विकल्प दिए जाते हैं। यदि एक नियम से उत्तर विकल्प में न मिले, तो तुरंत द्वितीयक अंतर (Double Difference) विधि का प्रयोग करें।
[/alert]

### Section 6 | अभ्यास प्रश्नावली (Practice Quiz)

[quiz title="संख्या श्रृंखला अभ्यास परीक्षा"]
Q: श्रृंखला को पूरा करें: 3, 7, 15, 31, 63, ?

- A) 121
- B) 127 (Correct: प्रत्येक पद को 2 से गुणा करके 1 जोड़ा गया है: )
- C) 129
- D) 135

Q: लुप्त संख्या ज्ञात कीजिए: 5, 11, 23, 47, 95, ?

- A) 189 (Correct: पैटर्न  है:  नहीं, बल्कि )
- B) 191
- C) 185
- D) 193

Q: श्रृंखला में गलत या अगली संख्या पहचानिए: 2, 6, 12, 20, 30, 42, ?

- A) 54
- B) 56 (Correct: अंतर 4, 6, 8, 10, 12, 14 है। अतः )
- C) 58
- D) 60
[/quiz]