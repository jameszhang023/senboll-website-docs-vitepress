import { defineConfig } from 'vite';

export default defineConfig({
  logLevel: 'debug',
  base: './', 
  assetsInclude: ['**/*.c4z', '**/*.rar', '**/*.apk', '**/*.exe'], // 添加你需要的文件类型
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'files/[name].[ext]', // 输出到相对路径
      },
    },
  },
  server: {
    mimeTypes: {
      'application/octet-stream': ['.c4z'],
      'application/x-rar-compressed': ['.rar']
    }
  }
});

// console.log('Test build is working!')