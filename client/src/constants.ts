export const languages = {javascript:102, python:100, java:91, cpp:105};

export const codeSnippets = {
    javascript: "// JavaScript code snippet\nconsole.log('Hello, world!');",
    python: "# Python code snippet\nprint('Hello, world!')",
    java: "// Java code snippet\nSystem.out.println('Hello, world!');",
    cpp: "// C++ code snippet\n#include <iostream>\nint main() {\n    std::cout << 'Hello, world!';\n    return 0;\n}",
}

export const getKeyByValue = (obj: Record<string, number>, value: number): string | undefined => {
  return Object.keys(obj).find(key => obj[key] === value);
};