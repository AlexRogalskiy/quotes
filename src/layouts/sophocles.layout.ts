import { LayoutOptions, StyleOptions, TemplateOptions } from '../../typings/domain-types'
import { LayoutPattern } from '../../typings/enum-types'

import { capitalize } from '../utils/commons'

const sophoclesLayout: Record<LayoutPattern.sophocles, LayoutOptions> = {
    sophocles: {
        style: (options: StyleOptions) => {
            const { quoteColor, authorColor, bgColor, opacity } = options.theme

            return `
                    @import 'https://fonts.googleapis.com/css?family=Lato:300';
                    @import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css';

                    html, body, .background {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                        font-family: "Lato", sans-serif;
                    }

                    .background {
                        background: #eee;
                        background: linear-gradient(120deg, rgba(50, 150, 100, 0.2), rgba(0, 0, 100, 0));
                    }

                    .container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                        overflow: auto;
                        position: relative;
                        background: #eee;
                        background: linear-gradient(240deg, rgba(150, 50, 50, 0.3), rgba(0, 0, 200, 0));
                    }

                    #card {
                        box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
                        width: 75%;
                        padding: 0;
                        height: 100%;
                        margin: 5%;
                        border-radius: 10px;
                    }

                    #card .details {
                        padding: 5% 5% 10% 10%;
                        color: #888;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        transition: color 2s ease;
                    }

                    #card .details .right {
                        text-align: right;
                        width: 100%;
                        height: 100%;
                    }

                    #card .details #author {
                        font-weight: 600;
                        font-size: 20px;
                        color: #${authorColor};
                        margin: 3% 0%;
                    }

                    #card .details #summary {
                        font-weight: 200;
                        font-style: italic;
                        font-size: 15px;
                        color: #${quoteColor};
                        text-align: justify;
                    }

                    #card .details {
                        font-size: 60px;
                        line-height: normal;
                    }

                    #card .details {
                        font-size: 18px;
                        line-height: normal;
                        vertical-align: top;
                    }

                    .quote-wrapper {
                        background: #${bgColor};
                        opacity: ${opacity};
                        transition: background-color 2s ease;
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="container background">
                        <div id="card" class="quote-wrapper">
                            <div class="details">
                                <div class="right">
                                    <div id="author">${capitalize(options.author)}</div>
                                    <div id="summary">${options.quote}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        },
    },
}

export default sophoclesLayout
