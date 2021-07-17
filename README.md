# Install Tailwind CSS & Ant Design with Next.js with TypeScript

Preview - [nextjs-antd-tailwind-ts](https://nextjs-antd-tailwind-ts.vercel.app/)

![screencapture-localhost-3000-2021-07-18-02_27_45](https://user-images.githubusercontent.com/68588944/126047606-7fd9acf8-ef9a-451c-8d3b-133b5c97d174.png)

1. Install & Library
    ```bash
    - npx create-next-app -e with-tailwindcss {project-name}
    - cd {project-name}
    - touch tsconfig.json
    - npm install --save-dev typescript @types/react @types/node
    - npm install antd
    ```
    
2. Create a directory
    - Create Directory At srcroot directory Move all directories into [`pages src`]
    - In the future, if we have a directory or other directory that contains source code in the job, it will also be provided in the directory to make it           easier to take care of our specific work parts. [`components src`]

3. Edit the file to TypeScript Format
    ```bash
    - src/pages/api/hello.ts
    - src/pages/_app.tsx
    - src/pages/index.tsx
    ```
    
4. Import Ant Design CSS
    ```bash
    - import 'antd/dist/antd.css' #first_line
    - import 'tailwindcss/tailwind.css'
    ```
    
5. Adjust Tailwind Path to work
    ``` bash
      module.exports = {
        mode: 'jit',
        purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
        important: true,
        darkMode: false,
        theme: {
          extend: {},
        },
        variants: {
          extend: {},
        },
        plugins: [],
      };
    ``` 
    - Add (line 4) to always have the Tailwind command over Ant Design.important: true

6. Enter the home test code.
    ``` bash
        import { Button, DatePicker, Typography } from 'antd';
        const { Title } = Typography;

        export default function Home() {
          return (
            <>
              <Title level={2}>antd Typography</Title>
              <DatePicker />
              <Button type='primary' className='ml-2'>
                Primary Button
              </Button>
            </>
          );
        }
    ```
    
7. Test the program
    - [`npm run dev`]
    
8. Set up tsconfig.json
    - Go to file Find the following variables in 
        [`. tsconfig.jsonCompilerOptions"strict": false --> true`]
    
9. Enable Absolute Imports
    - Go to file Add the following variables in the . tsconfig.jsonCompilerOptions
    ``` bash
      {
        "compilerOptions": {
          "baseUrl": ".",
          "paths": {
            "@/components/*": ["src/components/*"]
          },
        "target": "es5",
      .....
    ```

10. In the future, we will be able to import files using the following code:
    - [`import 'SomeComponents' from '@/components/...';`]
