'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultExport = new String('.writer{position:absolute;top:0;width:100%;margin-top:55px;height:calc(100vh - 95px);overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;}.writer *{-webkit-transform:translate3d(0,0,0);}.menu.toolbar-menu{position:absolute;display:inline-block;padding-right:5px;padding-left:40px;height:55px;background:white;z-index:5;line-height:63px;width:100%;}.toolbar-button{display:inline-block;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}.toolbar-button.clear,.toolbar-button.save{margin-left:20px;}.menu.toolbar-menu .button{margin-left:28px;font-size:23px;}.host{position:relative;height:100vh;margin:0;padding:0;overflow-x:hidden;z-index:0;}.editor{font-family:\'Libre Baskerville\',Baskerville,\'Baskerville Old Face\', \'Hoefler Text\',Garamond,\'Times New Roman\',serif;font-feature-settings:\'kern\' 1,\'liga\' 1,\'calt\' 1,\'pnum\' 1,\'tnum\' 0, \'onum\' 1,\'lnum\' 0,\'dlig\' 0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;padding-top:30px;padding-right:60px;padding-left:40px;color:white;min-height:300px;font-size:18px;margin:auto auto;}.image-uploader-container{position:absolute;top:0;left:0;height:100vh;width:100vw;}.image-uploader{position:absolute;top:calc(50% - 100px);height:300px;width:300px;left:calc(50% - 100px);}.image-uploader-close-button{position:absolute;top:20px;right:20px;}.title-container{padding-left:40px;padding-right:40px;padding-top:30px;}.title{opacity:1;width:100%;outline:none;font-size:24px;width:auto !import;background:transparent;border:none;resize:none;height:46px;font-family:\'Libre Baskerville\',Baskerville,\'Baskerville Old Face\', \'Hoefler Text\',Garamond,\'Times New Roman\',serif;font-feature-settings:\'kern\' 1,\'liga\' 1,\'calt\' 1,\'pnum\' 1,\'tnum\' 0, \'onum\' 1,\'lnum\' 0,\'dlig\' 0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;}.title::-webkit-input-placeholder{color:rgba(0,0,0,0.6);}.title::-moz-placeholder{color:rgba(0,0,0,0.6);}.title:-ms-input-placeholder{color:rgba(0,0,0,0.6);}.title::placeholder{color:rgba(0,0,0,0.6);}.dark .title::-webkit-input-placeholder{color:rgba(255,255,255,0.6);}.dark .title::-moz-placeholder{color:rgba(255,255,255,0.6);}.dark .title:-ms-input-placeholder{color:rgba(255,255,255,0.6);}.dark .title::placeholder{color:rgba(255,255,255,0.6);}.title:focus{opacity:1;}');

_defaultExport.__hash = '1242331827';
_defaultExport.__scoped = '.writer.jsx-11699954{position:absolute;top:0;width:100%;margin-top:55px;height:calc(100vh - 95px);overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;}.writer.jsx-11699954 *.jsx-11699954{-webkit-transform:translate3d(0,0,0);}.menu.toolbar-menu.jsx-11699954{position:absolute;display:inline-block;padding-right:5px;padding-left:40px;height:55px;background:white;z-index:5;line-height:63px;width:100%;}.toolbar-button.jsx-11699954{display:inline-block;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}.toolbar-button.clear.jsx-11699954,.toolbar-button.save.jsx-11699954{margin-left:20px;}.menu.toolbar-menu.jsx-11699954 .button.jsx-11699954{margin-left:28px;font-size:23px;}.host.jsx-11699954{position:relative;height:100vh;margin:0;padding:0;overflow-x:hidden;z-index:0;}.editor.jsx-11699954{font-family:\'Libre Baskerville\',Baskerville,\'Baskerville Old Face\', \'Hoefler Text\',Garamond,\'Times New Roman\',serif;font-feature-settings:\'kern\' 1,\'liga\' 1,\'calt\' 1,\'pnum\' 1,\'tnum\' 0, \'onum\' 1,\'lnum\' 0,\'dlig\' 0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;padding-top:30px;padding-right:60px;padding-left:40px;color:white;min-height:300px;font-size:18px;margin:auto auto;}.image-uploader-container.jsx-11699954{position:absolute;top:0;left:0;height:100vh;width:100vw;}.image-uploader.jsx-11699954{position:absolute;top:calc(50% - 100px);height:300px;width:300px;left:calc(50% - 100px);}.image-uploader-close-button.jsx-11699954{position:absolute;top:20px;right:20px;}.title-container.jsx-11699954{padding-left:40px;padding-right:40px;padding-top:30px;}.title.jsx-11699954{opacity:1;width:100%;outline:none;font-size:24px;width:auto !import;background:transparent;border:none;resize:none;height:46px;font-family:\'Libre Baskerville\',Baskerville,\'Baskerville Old Face\', \'Hoefler Text\',Garamond,\'Times New Roman\',serif;font-feature-settings:\'kern\' 1,\'liga\' 1,\'calt\' 1,\'pnum\' 1,\'tnum\' 0, \'onum\' 1,\'lnum\' 0,\'dlig\' 0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;}.title.jsx-11699954::-webkit-input-placeholder{color:rgba(0,0,0,0.6);}.title.jsx-11699954::-moz-placeholder{color:rgba(0,0,0,0.6);}.title.jsx-11699954:-ms-input-placeholder{color:rgba(0,0,0,0.6);}.title.jsx-11699954::placeholder{color:rgba(0,0,0,0.6);}.dark.jsx-11699954 .title.jsx-11699954::-webkit-input-placeholder{color:rgba(255,255,255,0.6);}.dark.jsx-11699954 .title.jsx-11699954::-moz-placeholder{color:rgba(255,255,255,0.6);}.dark.jsx-11699954 .title.jsx-11699954:-ms-input-placeholder{color:rgba(255,255,255,0.6);}.dark.jsx-11699954 .title.jsx-11699954::placeholder{color:rgba(255,255,255,0.6);}.title.jsx-11699954:focus{opacity:1;}';
_defaultExport.__scopedHash = '11699954';
exports.default = _defaultExport;