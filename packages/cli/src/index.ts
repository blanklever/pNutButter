#!/usr/bin/env node
/**
 * @packageDocumentation
 * CLI entry for pNutButter
 */
import { saveArticleCommand } from './commands';

const [,, cmd, ...args] = process.argv;

if (cmd === 'save-article' && args[0]) {
  saveArticleCommand(args[0], args[1]).catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
} else {
  console.log('pNutButter CLI - work in progress');
  console.log('Usage: pnutbutter save-article <url> [outDir]');
}
