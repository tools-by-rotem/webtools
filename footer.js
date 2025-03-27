document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-section">
                <p>רשתות חברתיות</p>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/rotem-kanon" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn">
                    </a>
                    <a href="https://github.com/tools-by-rotem" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub">
                    </a>
                </div>
            </div>
            <div class="footer-section">
                <p>ניווט באתר</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/">ספריית הכלים</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/accessibility-statement">הצהרת נגישות</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>כמויות חיפושים</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/google-search-volume">כמות חיפושים בגוגל</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/spotify-search-volume">כמות חיפושים בספוטיפיי</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/soundcloud-search-volume">כמות חיפושים בסאונדקלאוד </a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/competitors-traffic">חישוב תנועה לאתרי מתחרים </a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>תצוגה מקדימה</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/open-graph-checker">בדיקת Open Graph</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/google-serp-preview">תצוגה מקדימה לנראות בגוגל</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/social-link-preview">תצוגה מקדימה לרשתות חברתיות</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>אופטימיזציה</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/page-speed-test">בדיקת מהירות טעינה</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/mobile-simulator">בדיקת תאימות למכשירים ניידים</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/image-minify-converter">המרת פורמט וכיווץ משקל תמונה</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>יצירה ועיצוב</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/background-remover">הסרת רקע מתמונה</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/draw">ציור אינטראקטיבי</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/image-color-identifier">זיהוי צבעי תמונה</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/infographics">יצירת אינפוגרפיקות</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>נגישות</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/accessibility-toolbar">סרגל נגישות</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/accessibility-checker">בדיקת נגישות לאתר אינטרנט</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>המרת יחידות</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/time-zone-converter">המרת זמן בינלאומי</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/fahrenheit-to-celsius">המרת פרנהייט לצלזיוס</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <p>שונות</p>
                <ul>
                    <li><a href="https://tools-by-rotem.github.io/webtools/navigation-links-generator">מחולל קישורי ניווט</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/reverse-typing-fix">תיקון הקלדה הפוכה</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/strong-password-generator">מחולל סיסמאות חזקות</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/time-to-go-home">הגיע הזמן ללכת הביתה</a></li>
                    <li><a href="https://tools-by-rotem.github.io/webtools/resume-scanner">התאמת קורות חיים לסורקים אוטומטיים</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2025 כל הזכויות שמורות לרותם קנון</p>
        </div>
    </footer>
    `;
    
    // הוספת הפוטר בסוף ה-body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
