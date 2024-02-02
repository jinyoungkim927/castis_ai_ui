# 캐스티스 AI

## Running Locally

### Pre environment

1. **Node**: Check that both your development environment and deployment environment are using `Node v18` or later. You can use [nvm](https://github.com/nvm-sh/nvm) to manage multiple `node` versions locally.

   ```bash
    node -v
   ```

2. **PNPM**: We recommend using [pnpm](https://pnpm.io/) to manage dependencies. If you have never installed pnpm, you can install it with the following command:

   ```bash
    npm i -g pnpm
   ```

3. **OPENAI_API_KEY**: Before running this application, you need to obtain the API key from OpenAI. You can register the API key at [https://beta.openai.com/signup](https://beta.openai.com/signup).

### Getting Started

1. Install dependencies

   ```bash
    pnpm install
   ```

2. Copy the `.env.example` file, then rename it to `.env`, and add your [OpenAI API key](https://platform.openai.com/account/api-keys) to the `.env` file.

   ```bash
    OPENAI_API_KEY=sk-xxx...
   ```

3. Run the application, the local project runs on `http://localhost:3000/`

   ```bash
    pnpm run dev
   ```

## Deploy

### Deploy With Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fddiu8081%2Fchatgpt-demo&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys)

> #### 🔒 Need website password?
>
> Deploy with the [`SITE_PASSWORD`](#environment-variables)
>
> <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fddiu8081%2Fchatgpt-demo&env=OPENAI_API_KEY&env=SITE_PASSWORD&envDescription=OpenAI%20API%20Key&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys" alt="Deploy with Vercel" target="_blank"><img src="https://vercel.com/button" alt="Deploy with Vercel" height=24 style="vertical-align: middle; margin-right: 4px;"></a>

![image](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230310/image.4wzfb79qt7k0.webp)
<<<<<<< Updated upstream
=======

## Environment Variables

You can control the website through environment variables.

| Name | Description | Default |
| --- | --- | --- |
| `OPENAI_API_KEY` | Your API Key for OpenAI. | `null` |
| `HTTPS_PROXY` | Provide proxy for OpenAI API. e.g. `http://127.0.0.1:7890` | `null` |
| `OPENAI_API_BASE_URL` | Custom base url for OpenAI API. | `https://api.openai.com` |
| `HEAD_SCRIPTS` | Inject analytics or other scripts before `</head>` of the page | `null` |
| `PUBLIC_SECRET_KEY` | Secret string for the project. Use for generating signatures for API calls | `null` |
| `SITE_PASSWORD` | Set password for site, support multiple password separated by comma. If not set, site will be public | `null` |
| `OPENAI_API_MODEL` | ID of the model to use. [List models](https://platform.openai.com/docs/api-reference/models/list) | `gpt-4-0125-preview` |

## Enable Automatic Updates

After forking the project, you need to manually enable Workflows and Upstream Sync Action on the Actions page of the forked project. Once enabled, automatic updates will be scheduled every day:

![](https://cdn.jsdelivr.net/gh/yzh990918/static@master/20230518/image.2hhnrsrd2t1c.webp)

## Frequently Asked Questions

Q: TypeError: fetch failed (can't connect to OpenAI Api)

A: Configure environment variables `HTTPS_PROXY`，reference: <https://github.com/ddiu8081/chatgpt-demo/issues/34>

Q: throw new TypeError(${context} is not a ReadableStream.)

A: The Node version needs to be `v18` or later, reference: <https://github.com/ddiu8081/chatgpt-demo/issues/65>

Q: Accelerate domestic access without the need for proxy deployment tutorial?

A: You can refer to this tutorial: <https://github.com/ddiu8081/chatgpt-demo/discussions/270>

## Contributing

This project exists thanks to all those who contributed.

Thank you to all our supporters!🙏

[![img](https://contributors.nn.ci/api?repo=ddiu8081/chatgpt-demo)](https://github.com/ddiu8081/chatgpt-demo/graphs/contributors)

## License

MIT © [ddiu8081](https://github.com/ddiu8081/chatgpt-demo/blob/main/LICENSE)
>>>>>>> Stashed changes
