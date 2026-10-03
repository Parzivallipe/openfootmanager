import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('personal build isolates saves and creates a Windows installer', () => {
 const base = JSON.parse(fs.readFileSync('src-tauri/tauri.conf.json'));
 const personal = JSON.parse(fs.readFileSync('src-tauri/tauri.felipe.conf.json'));
 assert.notEqual(personal.identifier, base.identifier);
 assert.equal(personal.productName, 'Openfoot Felipe');
 assert.deepEqual(personal.bundle.targets, ['nsis']);
});
