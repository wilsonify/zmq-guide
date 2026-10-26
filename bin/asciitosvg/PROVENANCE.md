# ASCIIToSVG provenance

This directory is a vendored copy of ASCIIToSVG, the ASCII-diagram-to-SVG
converter used by `bin/mkdocbook`, `bin/mkwikidot`, and `bin/mkfig2pdf`.

| Field | Value |
| --- | --- |
| Upstream | <https://github.com/dhobsd/asciitosvg> (original Mercurial repository: `https://bitbucket.org/dhobsd/asciitosvg`, now unavailable) |
| Vendored revision | Mercurial changeset `fa0ba52518c59486e4d4c0a148f22b9fe5829250` (recorded in the removed `.hg/dirstate`) |
| License | BSD 2-Clause; see [`LICENSE`](LICENSE) |

The copy is kept because it is a public-domain/BSD build tool with no package
release for the pinned revision, and the guide's build scripts call `a2s` from
`PATH`. It is not application runtime code. To update it, replace this directory
from a reviewed upstream commit, run `bin/mkfig2pdf` on a sample figure, and
update the revision above. Do not run `hg`/`git` metadata inside this directory.

The ZeroMQ guide's own `bin/README.md` notes that the tools in `bin/` are placed
in the public domain; this subdirectory retains its own BSD license.
