// scripts/create-schema.ts
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FileName = process.argv[2];

if (!FileName) {
    console.error('❌ Please provide a schema name');
    process.exit(1);
}

const className = FileName.charAt(0).toUpperCase() + FileName.slice(1);
const content = `import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type ${className}Document = HydratedDocument<${className}> ;

@Schema()
export class ${className} {
  @Prop({ required: true })
  name: string;
}

export const ${className}Schema = SchemaFactory.createForClass(${className});
`;

const dir = path.resolve(__dirname, `../src/schemas`);
await mkdir(dir, { recursive: true });
await writeFile(path.join(dir, `${FileName}.schema.ts`), content);

console.log(`✅ Schema ${className} created at ${dir}`);