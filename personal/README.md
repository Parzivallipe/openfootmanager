# Openfoot Felipe — development setup

Personal edition based on Openfoot Manager, retaining the original GPLv3 license and credits.

This first checkpoint adds a separate application identity and a manual Windows build workflow. It does not yet include a verified real-world player database. Brazilian Portuguese already exists upstream; select it in Settings.

## Build on GitHub

Create your own fork of the upstream repository, place these changes on your own branch, then run Actions > Build Openfoot Felipe for Windows > Run workflow. The Windows installer appears as an artifact after a successful run. This workflow does not publish a release.

## Local Windows development

Install Node.js 24, Rust through rustup, Microsoft C++ Build Tools with the Desktop development with C++ workload, and WebView2. Run from the repository root:

```
npm ci
npm run tauri dev -- --config src-tauri/tauri.felipe.conf.json
```

To build the Windows installer:

```
npm run tauri build -- --config src-tauri/tauri.felipe.conf.json
```

The separate application identifier gives this edition its own app data directory. Existing upstream saves are not automatically imported.

## Real-world database milestone

Initial proposed scope: Brazilian first division. Before importing, choose a season and a roster snapshot date, retain a source for each roster, and distinguish measured facts from estimated game attributes. Use the documented .ofm package format (ZIP containing schema-tagged JSON files). Validate with ofm-cli, then test save/load and a complete season before calling the database playable.

No real rosters, ratings, licenses for third-party datasets, or successful Windows builds are claimed by this checkpoint.
