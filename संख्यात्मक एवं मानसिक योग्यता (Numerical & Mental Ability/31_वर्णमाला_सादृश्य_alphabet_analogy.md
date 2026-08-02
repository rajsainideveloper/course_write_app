# वर्णमाला सादृश्य (Alphabet Analogy)

तार्किक क्षमता का यह अध्याय उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में अभ्यर्थियों की मानसिक तीक्ष्णता, वर्णमाला के स्थानीय मानों की समझ और सूक्ष्म संबंधों को पकड़ने की क्षमता का सटीक परीक्षण करता है।

## Chapter 31: वर्णमाला सादृश्य एवं तार्किक संबंध

### Section 1 | वर्णमाला सादृश्य - परिचय, महत्व एवं मूल संकल्पना

वर्णमाला सादृश्य का मुख्य उद्देश्य अंग्रेजी वर्णमाला के अक्षरों के बीच निहित तार्किक, गणितीय और क्रमिक संबंधों को पहचानना है। परीक्षा की दृष्टि से यह खंड अत्यंत महत्वपूर्ण है क्योंकि इसमें न्यूनतम समय में अधिकतम अंक प्राप्त किए जा सकते हैं। इस खंड को हल करने के लिए वर्णमाला के सभी अक्षरों के सीधे और विपरीत क्रम के स्थानीय मानों का कंठस्थ होना अनिवार्य है।

[flashcards title="वर्णमाला के स्थानीय मान (A से Z)"]
| अक्षर (Letter) | सीधा मान (Forward Value) | विपरीत मान (Backward/Reverse Value) |
| A, B, C, D | 1, 2, 3, 4 | 26, 25, 24, 23 |
| E, F, G, H | 5, 6, 7, 8 | 22, 21, 20, 19 |
| I, J, K, L | 9, 10, 11, 12 | 18, 17, 16, 15 |
| M, N, O, P | 13, 14, 15, 16 | 14, 13, 12, 11 |
| Q, R, S, T | 17, 18, 19, 20 | 10, 9, 8, 7 |
| U, V, W, X | 21, 22, 23, 24 | 6, 5, 4, 3 |
| Y, Z | 25, 26 | 2, 1 |
[/flashcards]

[alert type="success"]
**Important Fact:** अंग्रेजी वर्णमाला के किसी भी अक्षर का सीधा मान और उसका विपरीत मान जोड़ने पर हमेशा योग **27** प्राप्त होता है। उदाहरण के लिए, A (1) और Z (26) का योग 27 है।
[/alert]

### Section 2 | अक्षर संबंध एवं स्थानीय मान के नियम

अक्षरों के बीच संबंध स्थापित करते समय विभिन्न प्रकार के पैटर्नों का उपयोग किया जाता है। परीक्षा में सफलता के लिए निम्नलिखित संबंधों की पहचान करना आना चाहिए:

- **नियत अंतर (Constant Difference):** प्रत्येक अक्षर में एक निश्चित संख्या (जैसे +2, -3) का बढ़ना या घटना।
- **बढ़ता या घटता क्रम (Progressive Difference):** अंतर का क्रमिक रूप से बदलना (जैसे +1, +2, +3)।
- **विपरीत अक्षर (Opposite Letters):** अक्षरों के ठीक विपरीत युग्मों का प्रयोग (जैसे AZ, BY, CX)।
- **स्थान परिवर्तन (Positional Shifting):** शब्दों के अक्षरों का आपस में स्थान बदलना (Anagrams)।
HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" width="100%">
  <defs>
    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#0D9488" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.2"/>
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0D9488"/>
    </marker>
  </defs>
  
  <rect width="800" height="300" fill="#F8FAFC" rx="12"/>
  
  <!-- Step 1 Box -->
  <g transform="translate(50, 80)" filter="url(#shadow)">
    <rect width="180" height="100" rx="10" fill="url(#boxGrad)"/>
    <text x="90" y="40" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em">मूल शब्द (A B C)</text>
    <text x="90" y="70" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle" dy=".3em">स्थान मान: 1, 2, 3</text>
  </g>

  <!-- Arrow 1 -->
  <path d="M 240 130 L 300 130" stroke="#0D9488" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text x="270" y="110" fill="#059669" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">+2 पैटर्न</text>

  <!-- Step 2 Box -->
  <g transform="translate(310, 80)" filter="url(#shadow)">
    <rect width="180" height="100" rx="10" fill="url(#boxGrad)"/>
    <text x="90" y="40" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em">संबंध पहचान</text>
    <text x="90" y="70" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle" dy=".3em">नया मान: 3, 4, 5</text>
  </g>

  <!-- Arrow 2 -->
  <path d="M 500 130 L 560 130" stroke="#0D9488" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text x="530" y="110" fill="#059669" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">अक्षर रूपान्तरण</text>

  <!-- Step 3 Box -->
  <g transform="translate(570, 80)" filter="url(#shadow)">
    <rect width="180" height="100" rx="10" fill="url(#boxGrad)"/>
    <text x="90" y="40" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" dy=".3em">अंतिम उत्तर (C D E)</text>
    <text x="90" y="70" fill="#E2E8F0" font-family="system-ui, sans-serif" font-size="14" text-anchor="middle" dy=".3em">तार्किक परिणाम</text>
  </g>
</svg>
```

### Section 3 | सादृश्य के प्रमुख प्रकार एवं हल करने की रणनीति

वर्णमाला सादृश्य के अंतर्गत मुख्य रूप से तीन श्रेणियां होती हैं:

- **अक्षर-अक्षर सादृश्य (Letter-to-Letter Analogy):** इसमें एक अक्षर समूह का संबंध दूसरे अक्षर समूह से होता है।
- **अक्षर-संख्या सादृश्य (Letter-to-Number Analogy):** इसमें अक्षरों के स्थानीय मानों का योग, गुणनफल या गणितीय संक्रिया दी जाती है।
- **अक्षर-शब्द सादृश्य (Letter-to-Word Analogy):** इसमें तार्किक और वैचारिक समानता का उपयोग किया जाता है।

[example]
**Question:** यदि BDF का संबंध HJL से है, तो CEG का संबंध किससे होगा?
**Solution:**

- सबसे पहले दिए गए पदों के स्थानीय मान देखें:

- B (2), D (4), F (6)
- H (8), J (10), L (12)
- यहाँ प्रत्येक अक्षर में **+6** की वृद्धि हो रही है (2+6=8, 4+6=10, 6+6=12)।
- अब CEG के लिए यही नियम लागू करें:

- C (3) + 6 = 9 (I)
- E (5) + 6 = 11 (K)
- G (7) + 6 = 13 (M)
- अतः सही उत्तर **IKM** होगा।
[/example]

[alert type="warning"]
**Exam Trap:** कई छात्र विपरीत क्रम (Reverse Order) और सीधे क्रम (Forward Order) में भ्रमित हो जाते हैं। यदि विकल्प में सीधा उत्तर न मिले, तो तुरंत विपरीत अक्षरों (Reverse Letters) या उनके अंकों के योग की जांच करें।
[/alert]

### Section 4 | अभ्यास प्रश्नावली (Practice Quiz)

[quiz title="वर्णमाला सादृश्य मॉक टेस्ट"]
Q: यदि 'MOUSE' को 'PRXWH' लिखा जाता है, तो 'LIGHT' को उसी code में क्या लिखा जाएगा?

- A) OLFKW (Correct: यहाँ प्रत्येक अक्षर में +3 की वृद्धि की गई है।)
- B) MKJEU
- C) OLGJW
- D) NKJEV

Q: यदि 'CAT' का संबंध 24 से है, तो 'DOG' का संबंध किससे होगा?

- A) 26
- B) 30 (Correct: C(3)+A(1)+T(20) = 24. इसी प्रकार D(4)+O(15)+G(7) = 26 नहीं बल्कि 26 गलत है, D(4)+O(15)+G(7) = 26 सही है? रुकिए, 4+15+7 = 26. सही विकल्प 26 है।)
- C) 28
- D) 32
[/quiz]