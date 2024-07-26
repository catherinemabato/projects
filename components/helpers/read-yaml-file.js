import fs from 'fs/promises';

export default async function readYamlFile(fileName) {
  try {
    const data = await fs.readFile(`./public/${fileName}`, 'utf-8');
    const yamlString = `\`\`\`yaml\n${data}\`\`\``;

    return yamlString;
  } catch (error) {
    throw new Error(`Error: something went wrong while reading ${fileName} file: ${error.message}`);
  }
}
