/**
 * 字体加载器 - 优先加载远程字体，失败后切换到本地字体
 */
class FontLoader {
  constructor() {
    this.fonts = [
      {
        name: '阿里妈妈东方大楷 Regular',
        remoteUrl: 'https://tanmantang.oss-cn-chengdu.aliyuncs.com/www/font/AlimamaDongFangDaKai/AlimamaDongFangDaKai-Regular.woff2',
        localFallbackClass: 'font-local-only'
      },
      {
        name: '得意黑 斜体',
        remoteUrl: 'https://tanmantang.oss-cn-chengdu.aliyuncs.com/www/font/SmileySans/SmileySans-Oblique.woff2',
        localFallbackClass: 'font-local-only'
      }
    ];
  }

  /**
   * 初始化字体加载检测
   */
  init() {
    // 检测所有字体
    this.fonts.forEach(font => {
      this.loadFont(font);
    });
  }

  /**
   * 加载字体并检测是否成功
   * @param {Object} font - 字体配置
   */
  loadFont(font) {
    const testElement = document.createElement('div');
    // 设置足够大的字体大小以确保能检测到
    testElement.style.fontSize = '200px';
    // 确保元素不可见但仍在布局中
    testElement.style.position = 'absolute';
    testElement.style.left = '-9999px';
    testElement.style.top = '-9999px';
    // 使用要测试的字体
    testElement.style.fontFamily = font.name;
    // 设置一个不太可能出现在其他字体中的字符
    testElement.textContent = '我';

    document.body.appendChild(testElement);

    // 检查字体是否加载成功
    // 我们通过测量宽度变化来判断字体是否加载
    const initialWidth = testElement.offsetWidth;

    // 监听字体加载事件
    const checkFontLoaded = () => {
      const newWidth = testElement.offsetWidth;

      // 如果宽度变化了，说明字体加载成功
      if (newWidth !== initialWidth) {
        // console.log(`字体加载成功: ${font.name}`);
        document.body.removeChild(testElement);
        return;
      }

      // 如果宽度没有变化，尝试直接加载远程字体文件
      this.testRemoteFontFile(font, testElement, initialWidth);
    };

    // 延迟检查，给字体加载一些时间
    setTimeout(checkFontLoaded, 1000);
  }

  /**
   * 直接测试远程字体文件是否可访问
   * @param {Object} font - 字体配置
   * @param {HTMLElement} testElement - 测试元素
   * @param {number} initialWidth - 初始宽度
   */
  testRemoteFontFile(font, testElement, initialWidth) {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', font.remoteUrl);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // 远程字体文件存在，但可能仍在加载中
        // 再检查一次宽度
        setTimeout(() => {
          const newWidth = testElement.offsetWidth;
          if (newWidth === initialWidth) {
            // console.warn(`远程字体 ${font.name} 存在但加载失败，切换到本地字体`);
            document.body.classList.add(font.localFallbackClass);
          }
          document.body.removeChild(testElement);
        }, 1000);
      } else {
        // 远程字体文件不存在，切换到本地字体
        console.warn(`远程字体 ${font.name} 不可访问，切换到本地字体`);
        document.body.classList.add(font.localFallbackClass);
        document.body.removeChild(testElement);
      }
    };

    xhr.onerror = () => {
      // 网络错误，切换到本地字体
      console.warn(`加载远程字体 ${font.name} 时发生网络错误，切换到本地字体`);
      document.body.classList.add(font.localFallbackClass);
      document.body.removeChild(testElement);
    };

    xhr.send();
  }
}

// 导出实例
const fontLoader = new FontLoader();
export default fontLoader;