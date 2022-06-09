# The Hasher Web Server

A quick and dirty web server that hashes a request body based on different specifications.
The hash used is typically meant to server to generate a signature, for digital signature signing and verification.

Currently servers a single standard, either a `GET` request or a `POST` request with a request body.
