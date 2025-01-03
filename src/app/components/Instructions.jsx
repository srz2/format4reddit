export default function Instructions() {
    return (
        <div className="description-container">
            <h1>Instructions</h1>
            <section>
                <h2>Introduction</h2>
                <p>I got annoyed of two things while on reddit...</p>
                <ol>
                    <li>New users either being ignorant of code formatting</li>
                    <li>Code formatting being annoying, especially on mobile</li>
                </ol>
                <p>Enter <a href="http://format4reddit.com">Format4Reddit</a> which is a dead simple tool for formatting</p>
            </section>
            <section>
                <h2>How It Works</h2>
                <p>This is a very <em>simple</em> tool which just takes your text input and adds four (4) spaces to the beginning of each line.</p>
                <p>The formatting is very simple but either people dont do it or its annoying to do on mobile.</p>
                <p>Now with this tool, this is no excuse:</p>
                <ol>
                    <li>Enter your code</li>
                    <li>Format It</li>
                    <li>Copy the Formatted Code</li>
                    <li>Make your Post</li>
                </ol>
            </section>
            <section>
                <h2>Reddit Formatting</h2>
                <p>Formatting on reddit is dead simple and taking the time to do it makes your posts a LOT more readable.</p>
                <p>Reddit uses their own flavor of <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a>. It is mostly standardized but for deviations, there are plenty of resources if you want to do more formatting</p>
                <ul>
                    <li><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://support.reddithelp.com/hc/en-us/articles/360043033952-Formatting-Guide&ved=2ahUKEwjEjKjK1tiKAxVag4kEHX26B54QFnoECBkQAQ&usg=AOvVaw2YMzuY4hKby4UFoJhQswd9">Reddit Help Docs - Formatting Guide</a></li>
                    <li><a href="https://www.markdownguide.org/tools/reddit/">MarkdownGuide</a></li>
                    <li><a href="https://speedsheet.io/s/reddit_markdown">SpeedSheet - Reddit Markdown</a></li>
                </ul>
            </section>
        </div>
    );
}