# औसत (Average)

गणितीय गणनाओं का यह केंद्रीय स्तंभ किसी डेटा समूह के समग्र प्रतिनिधित्व, संतुलन और प्रवृत्तियों को समझने की अनिवार्य कुंजी है, जो उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में सफलता का मार्ग प्रशस्त करती है।

## Chapter 11: औसत (गणितीय संतुलन और व्यावहारिक अनुप्रयोग)

### Section 1 | औसत की मूल अवधारणा और मौलिक सूत्र

संख्याओं के किसी दिए गए समुच्चय का औसत वह केंद्रीय मान है जो उस समुच्चय के सभी अवयवों का प्रतिनिधित्व करता है। यह सभी प्रेक्षणों के योग और प्रेक्षणों की कुल संख्या का अनुपात होता है।

=औसत = (संख्याओं का योग) / (संख्याओं की कुल संख्या)=

[alert type="success"]
**Important Fact:** यदि किसी समुच्चय की प्रत्येक संख्या में किसी अचर राशि `x` को जोड़ा, घटाया, गुणा या भाग किया जाए, तो नया औसत भी मूल औसत में क्रमशः `x` जोड़ने, घटाने, गुणा या भाग करने पर प्राप्त मान के बराबर होता है।
[/alert]

[example]
**Question:** प्रथम 50 प्राकृतिक संख्याओं का औसत ज्ञात कीजिए।
**Solution:**
प्रथम `n` प्राकृतिक संख्याओं का योग = 
अतः प्रथम `n` प्राकृतिक संख्याओं का औसत = 
यहाँ  है।
औसत = 
[/example]

### Section 2 | भारित औसत (Weighted Average) और संयुक्त औसत

जब दो या दो से अधिक समूहों के अलग-अलग औसत और उनके सदस्यों की संख्या दी गई हो, तब संपूर्ण डेटा का संयुक्त औसत निकाला जाता है।

- **संयुक्त औसत का सूत्र:**
=संयुक्त औसत = \frac{n_1\bar{x}_1 + n_2\bar{x}_2 + \dots + n_k\bar{x}_k}{n_1 + n_2 + \dots + n_k}=

[flashcards title="औसत के महत्वपूर्ण सूत्र एवं अवधारणाएं"]

| अवधारणा / नियम |सूत्र / विवरण |
| लगातार n सम संख्याओं का औसत | |
| लगातार n विषम संख्याओं का औसत | |
| लगातार संख्याओं के वर्ग का औसत | |
| लगातार संख्याओं के घन का औसत | |
| समान दूरी तय करने पर औसत चाल | |
| [/flashcards] | |

### Section 3 | विभिन्न श्रेणियों पर आधारित प्रश्न (आयु, चाल, अंक और भार)

परीक्षा में औसत के प्रश्न विविध व्यावहारिक परिस्थितियों पर आधारित होते हैं। इन्हें हल करने के लिए पारंपरिक विधियों के साथ-साथ विचलन विधि (Deviation Method) का प्रयोग समय बचाता है।

[example]
**Question:** 5 संख्याओं का औसत 27 है। यदि एक संख्या निकाल दी जाए, तो औसत 25 हो जाता है। निकाली गई संख्या ज्ञात कीजिए।
**Solution:**
5 संख्याओं का कुल योग = 
4 संख्याओं का कुल योग = 
न निकाली गई (पाँचवीं) संख्या = 
[/example]

### Section 4 | औसत अवधारणा का दृश्य प्रतिनिधित्व (Visual Representation)

HTML

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%">
  <defs>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#0D9488" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="4" stdDeviation="4" flood-opacity="0.15" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="400" fill="#F8FAFC" rx="12" />

  <!-- Title -->
  <text x="400" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="#1E3A8A" text-anchor="middle">औसत के प्रमुख प्रकार एवं अनुप्रयोग</text>

  <!-- Box 1 -->
  <g transform="translate(50, 80)" filter="url(#shadow)">
    <rect width="210" height="260" rx="10" fill="white" stroke="#CBD5E1" stroke-width="1" />
    <rect width="210" height="50" rx="10" fill="url(#cardGrad)" />
    <text x="105" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="bold" fill="white" text-anchor="middle">साधारण औसत</text>
    <text x="20" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• कुल योग / कुल संख्या</text>
    <text x="20" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• प्राकृतिक संख्याएँ</text>
    <text x="20" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• सम और विषम श्रेणियाँ</text>
    <text x="20" y="190" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• समानांतर श्रेढ़ी (AP)</text>
  </g>

  <!-- Box 2 -->
  <g transform="translate(295, 80)" filter="url(#shadow)">
    <rect width="210" height="260" rx="10" fill="white" stroke="#CBD5E1" stroke-width="1" />
    <rect width="210" height="50" rx="10" fill="url(#cardGrad)" />
    <text x="105" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="bold" fill="white" text-anchor="middle">भारित एवं संयुक्त</text>
    <text x="20" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• समूहों का संयोजन</text>
    <text x="20" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• भारित औसत सूत्र</text>
    <text x="20" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• एलिगेशन मिश्रण विधि</text>
    <text x="20" y="190" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• छात्र और प्राप्तांक</text>
  </g>

  <!-- Box 3 -->
  <g transform="translate(540, 80)" filter="url(#shadow)">
    <rect width="210" height="260" rx="10" fill="white" stroke="#CBD5E1" stroke-width="1" />
    <rect width="210" height="50" rx="10" fill="url(#cardGrad)" />
    <text x="105" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="bold" fill="white" text-anchor="middle">व्यावहारिक प्रश्न</text>
    <text x="20" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• आयु आधारित प्रश्न</text>
    <text x="20" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• औसत चाल (Speed)</text>
    <text x="20" y="155" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• तापमान परिवर्तन</text>
    <text x="20" y="190" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#334155">• बल्लेबाज के रन औसत</text>
  </g>
</svg>
```

### Section 5 | UP Police परीक्षा रणनीति और सामान्य त्रुटियाँ

उत्तर प्रदेश पुलिस कांस्टेबल परीक्षा में समय प्रबंधन सफलता की कुंजी है। औसत के प्रश्नों को तेजी से हल करने के लिए निम्नलिखित बिन्दुओं पर ध्यान दें:

- लंबी गणनाओं से बचने के लिए **विचलन (Deviation)** विधि का अभ्यास करें।
- विकल्पों का चयन करते समय इकाई अंक (Unit Digit) और डिजिटल सम का उपयोग करें।
- प्रश्न में "शामिल होने" या "छोड़ने" पर औसत पर पड़ने वाले प्रभाव के मौखिक शॉर्टकट याद रखें।

[quiz title="औसत अभ्यास प्रश्न परीक्षण"]
Q: 7 लगातार सम संख्याओं का औसत 36 है। इनमें से सबसे बड़ी संख्या ज्ञात कीजिए।

- A) 38
- B) 40
- C) 42 (Correct: लगातार सम संख्याओं का औसत ठीक मध्य की संख्या होती है। यदि औसत 36 है, तो चौथी संख्या 36 है। सात संख्याएँ: 30, 32, 34, 36, 38, 40, 42। सबसे बड़ी संख्या 42 है।)
- D) 44

Q: एक कक्षा के 40 छात्रों का औसत भार 45 किग्रा है। यदि अध्यापक का भार भी शामिल कर लिया जाए, तो औसत 1 किग्रा बढ़ जाता है। अध्यापक का भार कितना है?

- A) 85 किग्रा (Correct: अध्यापक सहित कुल व्यक्ति = 41, नया औसत = 46 किग्रा। कुल भार में वृद्धि =  किग्रा, गणना सुधार:  किग्रा।)
- B) 86 किग्रा
- C) 80 किग्रा
- D) 90 किग्रा
[/quiz]