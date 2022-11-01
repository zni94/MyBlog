/**
 * %USERPROFILE% 은
 * 'C:\Users\사용자이름' 까지의 경로로 System Default 값이다.
 *
 */
const files = {
  vscode:
    "%USERPROFILE%\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
  intellij:
    "%USERPROFILE%\\AppData\\Local\\JetBrains\\Toolbox\\apps\\IDEA-U\\ch-0\\222.4345.14\\bin\\idea64.exe",
  datagrip:
    "%USERPROFILE%\\AppData\\Local\\JetBrains\\Toolbox\\apps\\datagrip\\ch-0\\222.4345.5\\bin\\datagrip64.exe",
  webstorm:
    "%USERPROFILE%\\AppData\\Local\\JetBrains\\Toolbox\\apps\\datagrip\\ch-0\\222.4345.5\\bin\\webstorm64.exe",
};

/**
 * path 를 ""으로 감싸주어야
 * 공백으로 들어가는 path 를 인식하고 프로그램 실행이 가능하다.
 *
 * @param pageName
 * @returns "path"
 */
module.exports.returnPath = (pageName) => {
  const path = files[pageName];

  return '"' + path + '"';
};
