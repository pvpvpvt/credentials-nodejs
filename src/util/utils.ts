import * as ini from 'ini';
import * as kitx from 'kitx';
import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
const accessAsync = promisify(fs.access);

export function timestamp(dateStr?: Date, timeChange?: number): string {
  let date = new Date(dateStr);
  if (!dateStr || isNaN(date.getTime())) {
    date = new Date();
  }
  if (timeChange) {
    date.setTime(date.getTime() + timeChange);
  }
  const YYYY = date.getUTCFullYear();
  const MM = kitx.pad2(date.getUTCMonth() + 1);
  const DD = kitx.pad2(date.getUTCDate());
  const HH = kitx.pad2(date.getUTCHours());
  const mm = kitx.pad2(date.getUTCMinutes());
  const ss = kitx.pad2(date.getUTCSeconds());
  // 删除掉毫秒部分
  return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}Z`;
}

export function parseFile(file: string, ignoreErr: boolean = false): any {
  // check read permission
  try {
    fs.accessSync(file, fs.constants.R_OK);
  } catch (e) {
    if (ignoreErr) {
      return null;
    }
    throw new Error('Has no read permission to credentials file');
  }

  return ini.parse(fs.readFileSync(file, 'utf-8'));
}

export async function loadIni(filePath: string): Promise<any> {
  await accessAsync(filePath, fs.constants.R_OK);
  const content = await readFileAsync(filePath, 'utf-8');
  return ini.parse(content);
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}
