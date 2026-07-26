# OpenNOW-Switch 0.0.4 port status

Source reviewed:
`OpenNOW-Switch-0.0.4`

Target:
`SwitchNOW`

This document tracks changes adapted from the upstream Switch fork. Changes
are ported selectively because SwitchNOW has its own authentication, session,
streaming, input, audio, and UI work that must not be overwritten.

## Ported

### Build reliability

- Added the Borealis GLFW dependency include path required by Switch builds.
- Prioritized project-built libraries ahead of older preinstalled archives.
- Made the libpeer mbedTLS override step idempotent.
- Replaced repeated mbedTLS override blocks with one clean vendor
  configuration.
- Made static library paths explicit in the libpeer build.
- Allowed `build-switch.ps1` to locate either supported MSYS2 installation.

### GeForce NOW server locations

- Added strict validation and normalization for streaming base URLs.
- Added loading of advertised GeForce NOW regions from `v2/serverInfo`.
- Added direct latency measurements with a warm-up and three measured
  connections per location.
- Added a four-worker measurement limit to avoid excessive concurrent
  connections.
- Added an `Auto (best)` mode with a 15-minute in-process result cache.
- Added manual server selection and latency refresh to Stream settings.
- Preserved the selected region when changing or resetting quality presets.
- Persisted the resolved CloudMatch endpoint with the active session.
- Made start, polling, cleanup, and stop use a consistent endpoint, with the
  official provider endpoint retained as the fallback.

### ICE and network diagnostics

- Replaced candidate-priority addition with the RFC ICE pair-priority formula.
- Sorted candidate pairs before connectivity checks.
- Added smoothed STUN binding RTT measurements.
- Added SCTP RTT as a fallback when an ICE sample is unavailable.
- Added RTT to periodic stream logs and the on-screen diagnostic text.

### Streaming latency safeguards

- Limited the decoder backlog to roughly 67 ms: two access units at 30 FPS
  and four at 60 FPS.
- Preserved SwitchNOW's existing burst drain of up to 24 UDP datagrams.
- Added a 1 ms idle backoff when the transport is ready but has no datagram,
  reducing busy-loop CPU use without sleeping while packets are available.

### Follow-up integration

- Localized server-location controls, measurement states, and related errors.
- Added the live network RTT value to the compact performance overlay.
- Added adaptive audio priming that waits for a bounded amount of decoded
  audio before playback, with startup behavior isolated in a tested policy.
- Added debug-only ICE candidate-pair snapshots with pair state, candidate
  types, endpoints, priority, checks, nomination, and selected status.
- Split WebRTC into session, negotiation, media, input, diagnostics, and
  shared implementation units.
- Split GeForce NOW operations into catalog, authentication, library, and
  session implementation modules while retaining one controlled translation
  unit for shared private helpers.

### GeForce NOW Alliance authentication

- Connected the provider picker to the normal Add account / Sign in flow.
- Provider discovery remains dynamic and uses the official
  `v1/serviceUrls` response rather than a hard-coded Alliance list.
- NVIDIA keeps native quick sign-in and optional password storage.
- Alliance partners are clearly labelled and use their provider-specific
  `idpId` through the OAuth QR/LAN flow; NVIDIA credentials are never sent to
  an Alliance login.
- The selected provider and its streaming service endpoint are stored with
  the resulting account, so refresh and streaming continue against the
  correct operator.

### Tests and validation

- Added policy tests for server URL selection, ICE pair priority, decoder queue
  depth, and network-loop backoff.
- Compiled all four policy tests with the devkitA64 C++ compiler.
- Completed a Release Switch build and generated `build/switch/SwitchNOW.nro`.

## Intentionally not ported

- Community proxy routing. SwitchNOW keeps NVIDIA authentication, catalog,
  session, signaling, and streaming traffic direct.
- QR-only authentication. SwitchNOW keeps its native saved-account and
  optional saved-password flow.
- HOME menu forwarder installation and HOME-button interception.
- A wholesale replacement of SwitchNOW's session and WebRTC modules. The
  current project contains newer fixes that are not present in the fork.
- The fork's audio start-buffer policy. SwitchNOW already has hardware-tested
  anti-hiss and gain changes, so this needs a separate A/B test.

## Remaining validation

1. Test Auto and manual region selection on real Switch hardware and confirm
   that queue polling and session termination use the selected endpoint.
2. Compare adaptive audio startup against the previous anti-hiss behavior on
   speakers and headphones.
3. Confirm ICE diagnostics remain silent when Diagnostics is disabled and
   contain all candidate pairs when enabled.
4. Test at least one real GeForce NOW Alliance account available in the
   console's region, including initial login, app restart, token refresh, and
   stream launch.

## Hardware test checklist

- Launch with `Auto (best)` and record the selected region and RTT.
- Launch with a manually selected region, wait in queue, enter the stream, and
  return normally.
- Cancel while queued and verify that no stale device session remains.
- Disconnect Wi-Fi during a session and verify clean recovery to the game
  page.
- Compare motion latency and decoder queue high-water marks against the
  previous build.
- Confirm audio startup remains free of hiss.
