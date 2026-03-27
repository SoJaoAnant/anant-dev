# A Deep Dive into QR Codes and how they work
---

## What is a QR Code?
QR stands for Quick Response, a 2D matrix barcode designed around two core goals
Must store significantly more data than a traditional 1D barcode
Must be decodable at high speed using any device such as a smartphone or scanner
A 1D barcode can only store around 20 alphanumeric characters, making QR codes necessary for denser data storage

## Core Concepts :
- Module — the individual black and white pixels that make up a QR code
- Module Configuration — the total number of modules in a code, ranging from V1 (21×21) to V40 (177×177)
- ECC (Error Correction Capability) — defines how much damage or dirt a code can withstand and still be readable, with four levels: Low, Medium, Quartile, and High
- The level chosen depends on the environment the QR code will be used in and how prone it will be to dirt or physical damage
- Error correction is achieved using Reed-Solomon codes, a powerful algorithm that allows the decoder to detect and fix errors

## Structure of a QR Code
- Quiet Zone — a 4-module wide blank border around the code that ensures surrounding text or markings do not interfere with decoding
- Encoding Region — the area that holds version information, format information, and the actual data and error correction codewords
- Finder Patterns — position detection patterns located at three corners (upper-left, upper-right, lower-left) used to orient the scanner

Each is a 7×7 outer dark square, 5×5 inner light square, and a 3×3 dark center
The ratio of module widths is 1:1:3:1:1

- Separators — one-module wide blank areas placed between each finder pattern and the encoding region
- Timing Patterns — alternating dark and light modules placed horizontally and vertically along the 6th row and column, used to determine the size of the data matrix
- Alignment Patterns — appear in QR codes above version 2, constructed from a 5×5 dark square, 3×3 light square, and a single dark center module; the number of alignment patterns increases with version
- Format Information — stored beside the separators, contains error correction level and data mask information
- Version Information — stored in a 6×3 block above the bottom-left finder pattern and a 3×6 block to the left of the upper-right finder pattern

## Encoding Data

- First, the type of input data is identified — Numeric, Alphanumeric, Byte, or Kanji since each uses a different method to convert text into bits
- A mode indicator (4 bits) is prepended to identify the encoding mode, followed by a character count indicator (4 bits) stating how many characters are encoded
Reed-Solomon error correction is applied to the encoded bits to generate error correction codewords
- The scanner reads both the data codewords and error correction codewords, comparing them to detect and correct any errors
- For larger QR codes, data is split into blocks and interleaved to improve resilience
- Modules are placed into the matrix according to a specific placement algorithm
Mask patterns one of 8 possible patterns is applied to the encoding region to avoid problematic visual patterns that could confuse scanners
- Format and version information are written into their reserved areas of the matrix last

## Decoding Data

- The scanner recognizes all dark and light modules as an array of 1s and 0s
Format information is decoded first to extract the mask pattern, and error correction is applied to the format information itself
- Version information is extracted to understand the code's size and structure
The mask pattern is removed by XORing the encoding region with the extracted mask
Data and error correction codewords are restored by reading the symbol characters in the correct order
- Errors are identified and corrected using the error correction codewords
Data codewords are divided into segments using the mode and character count indicators, then decoded according to the mode in use, and the final output is produced

## Types of QR Codes

- Model 1 — the original QR code, capable of encoding up to 1167 numerals with a maximum version of V14 (73×73)
- Model 2 — an improvement over Model 1, readable even when distorted by surface curvature or reading angle, capable of encoding up to 7089 numerals at V40 (177×177)
- Micro QR Code — a compact variant with only one position detection pattern and a quietzone of just 2 modules wide
- LogoQ — a variant designed primarily for aesthetic purposes, allowing logos or designs to be embedded within the code
- iQR Code — an intelligent/improved QR code capable of encoding over 40,000 numeric characters, with support for rectangular shapes
- Encrypted QR Code — a standard QR code where the stored data is encrypted before encoding, adding a layer of security