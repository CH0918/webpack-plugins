class DonePlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap(
      'MyPlugin',
      (NormalModuleFactory) => {
        NormalModuleFactory.hooks.beforeResolve.tap(
          'MyPlugin',
          (resolveData) => {
            console.log(resolveData.request, 'resolveData');
            // 仅仅解析目录为./src/index.js 忽略其他引入的模块
            return resolveData.request === './a.js';
            // return true;
          }
        );
      }
    );
  }
}

module.exports = DonePlugin;
