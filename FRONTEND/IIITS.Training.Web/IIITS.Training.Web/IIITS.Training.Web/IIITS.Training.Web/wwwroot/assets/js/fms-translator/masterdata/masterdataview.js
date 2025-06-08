$(document).ready(function () {
    var translations = {
        "en": {
            "Master Data": "Master Data",
            "Master Configuration Type": "Master Configuration Type",
            "Load": "Load",
            "Reset": "Reset",
            "Create": "Create",
            "Master Data Details": "Master Data Details",
            "Serial Number": "Serial Number",
            "MasterData Name": "MasterData Name",
            "MasterData Value": "MasterData Value",
            "Status": "Status",
            "Action": "Action",
            "Master Data": "Master Data",
            "Master Data Creation": "Master Data Creation",
            "Type": "Type",
            "Name": "Name",
            "Value": "Value",
            "Comments": "Comments",
            "Save": "Save",
            "Back": "Back"
            // Add more translations for English here
        },

        "hi": {
            "Master Data": "मास्टर डेटा",
            "Master Configuration Type": "मास्टर कॉन्फ़िगरेशन प्रकार",
            "Load": "लोड",
            "Reset": "रीसेट",
            "Create": "बनाएं",
            "MasterData Name": "मास्टर डाटा नाम",
            "MasterData Value": "मास्टरडाटा मूल्य",
            "Status": "स्थिति",
            "Action": "क्रिया",
            "Serial Number": "क्रम संख्या",
            "MasterData Name": "मास्टरडेटा नाम",
            "MasterData Value": "मास्टरडेटा मान",
            "Status": "स्थिति",
            "Action": "क्रिया",
            "Master Data": "मास्टर डेटा",
            "Master Data Creation": "मास्टर डेटा निर्माण",
            "Type": "प्रकार",
            "Name": "नाम",
            "Value": "मान",
            "Comments": "टिप्पणियाँ",
            "Save": "सहेजें",
            "Back": "पीछे"
   // Add more translations for Hindi here
},
    };

    // Function to translate labels and buttons
    function translateLabels(language) {
        $('[data-translate]').each(function () {
            var labelText = $(this).data('translate');
            var translatedText = translations[language][labelText];
            if (translatedText) {
                if ($(this).is("button")) {
                    // If the element is a button, set its text content
                    $(this).text(translatedText);
                } else {
                    // For other elements, set their text content
                    $(this).text(translatedText);
                }
            }
        });
    }

    // Language selector change event
    $("#language-selector input[type='radio']").change(function () {

        var selectedLanguage = $("input[name='radio-switch-name']:checked").val();
        translateLabels(selectedLanguage);

    });

    // Initial translation
    var initialLanguage = $("input[name='radio-switch-name']:checked").val();
    translateLabels(initialLanguage);
});
