## Create From Scratch

1. install laravel
    ```sh
    composer create-project "laravel/laravel" boilerplate-laravue "10.*"
    ```

2. install default node package by laravel
    ```sh
    npm install
    ```

3. install vue
    ```sh
    npm install vue@3
    ```

3. install vite plugin, typescript and ts-loader
    ```sh
    npm install -D typescript ts-loader @vitejs/plugin-vue
    ```

4. install tailwind
    ```sh
    npm install -D tailwindcss postcss autoprefixer
    ```

5. create tailwind config
    ```sh
    npx tailwindcss init -p
    ```

6. edit tailwind config
    ```js
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    ```

7. create typescript config file, named `tsconfig.json`. paste code below
    ```json
    {
        "compilerOptions": {
            "target": "esnext",
            "module": "esnext",
            "moduleResolution": "node",
            "strict": true,
            "jsx": "preserve",
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true,
            "baseUrl": ".",
            "paths": {
            "@/*": ["resources/ts/*"]
            }
        },
        "include": [
            "resources/ts/**/*"
        ]
    }
    ```

8. edit file `vite.config.ts` like bellow
    ```ts
    import { defineConfig } from 'vite';
    import laravel from 'laravel-vite-plugin';
    import vue from '@vitejs/plugin-vue';

    export default defineConfig({
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/ts/app.ts'],
                refresh: true,
            }),
            vue(),
        ],
    });
    ```

9. install vuetic
    ```
    npm install vuestic-ui
    ```