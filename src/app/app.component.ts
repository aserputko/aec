import { Component } from '@angular/core';

@Component({
    selector: 'aec-root',
    template: `
        <!-- Toolbar -->
        <div class="toolbar" role="banner">
            <img
                width="40"
                alt="Angular Logo"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
            />
            <span>Welcome</span>
            <div class="spacer"></div>
            <a
                aria-label="Angular on twitter"
                target="_blank"
                rel="noopener"
                href="https://twitter.com/angular"
                title="Twitter"
            >
                <svg
                    id="twitter-logo"
                    height="24"
                    data-name="Logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 400"
                >
                    <rect width="400" height="400" fill="none" />
                    <path
                        d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
                        fill="#fff"
                    />
                </svg>
            </a>
        </div>

        <div class="content" role="main">
            <!-- Highlight Card -->
            <div class="card highlight-card card-small">
                <svg
                    id="rocket"
                    alt="Rocket Ship"
                    xmlns="http://www.w3.org/2000/svg"
                    width="101.678"
                    height="101.678"
                    viewBox="0 0 101.678 101.678"
                >
                    <g id="Group_83" data-name="Group 83" transform="translate(-141 -696)">
                        <circle
                            id="Ellipse_8"
                            data-name="Ellipse 8"
                            cx="50.839"
                            cy="50.839"
                            r="50.839"
                            transform="translate(141 696)"
                            fill="#dd0031"
                        />
                        <g id="Group_47" data-name="Group 47" transform="translate(165.185 720.185)">
                            <path
                                id="Path_33"
                                data-name="Path 33"
                                d="M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z"
                                transform="translate(0.371 3.363)"
                                fill="#fff"
                            />
                            <path
                                id="Path_34"
                                data-name="Path 34"
                                d="M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z"
                                transform="translate(0 0.005)"
                                fill="#fff"
                            />
                        </g>
                    </g>
                </svg>

                <span>{{ title }} app is running!</span>

                <svg
                    id="rocket-smoke"
                    alt="Rocket Ship Smoke"
                    xmlns="http://www.w3.org/2000/svg"
                    width="516.119"
                    height="1083.632"
                    viewBox="0 0 516.119 1083.632"
                >
                    <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z"
                        transform="translate(-147.025 -140.939)"
                        fill="#f5f5f5"
                    />
                </svg>
            </div>

            <aec-user-list></aec-user-list>
        </div>
        <router-outlet></router-outlet>
    `,
    styles: [
        `
            :host {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 14px;
                color: #333;
                box-sizing: border-box;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        `,
    ],
})
export class AppComponent {
    title = 'user-list';
}
