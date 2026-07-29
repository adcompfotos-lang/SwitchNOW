#include "../extern/libpeer/src/rtp_recovery.h"

#include <assert.h>

int main(void) {
  assert(rtp_recovery_gap_hold_ms(0, 0) ==
         RTP_RECOVERY_DEFAULT_GAP_HOLD_MS);
  assert(rtp_recovery_gap_hold_ms(20, 1) ==
         RTP_RECOVERY_MIN_GAP_HOLD_MS);
  assert(rtp_recovery_gap_hold_ms(45, 3) == 59);
  assert(rtp_recovery_gap_hold_ms(120, 20) ==
         RTP_RECOVERY_MAX_GAP_HOLD_MS);
  assert(rtp_recovery_burst_gap_hold_ms(43, 27, 4) == 56);
  assert(rtp_recovery_burst_gap_hold_ms(52, 0, 0) ==
         RTP_RECOVERY_BURST_MIN_HOLD_MS);
  assert(rtp_recovery_burst_gap_hold_ms(72, 20, 1) == 72);

  assert(rtp_recovery_nack_retry_ms(0) == 16);
  assert(rtp_recovery_nack_retry_ms(15) ==
         RTP_RECOVERY_MIN_NACK_RETRY_MS);
  assert(rtp_recovery_nack_retry_ms(48) == 16);
  assert(rtp_recovery_nack_retry_ms(120) ==
         RTP_RECOVERY_MAX_NACK_RETRY_MS);

  assert(rtp_recovery_startup_active(0));
  assert(rtp_recovery_startup_active(179));
  assert(!rtp_recovery_startup_active(180));
  assert(rtp_recovery_startup_gap_hold_ms(52, 0) == 60);
  assert(rtp_recovery_startup_gap_hold_ms(70, 20) ==
         RTP_RECOVERY_MAX_GAP_HOLD_MS);
  assert(rtp_recovery_startup_gap_hold_ms(52, 180) == 52);
  assert(rtp_recovery_nack_evidence_packets(0) == 2);
  assert(rtp_recovery_nack_evidence_packets(180) == 3);

  assert(rtp_recovery_should_wait_for_gap(64, 20, 55, 112));
  assert(!rtp_recovery_should_wait_for_gap(64, 55, 55, 112));
  assert(!rtp_recovery_should_wait_for_gap(112, 1, 55, 112));
  assert(!rtp_recovery_should_fast_forward(64, 20, 55, 112));
  assert(rtp_recovery_should_fast_forward(64, 55, 55, 112));
  assert(rtp_recovery_should_fast_forward(112, 1, 55, 112));

  assert(!rtp_recovery_should_rebase_startup(127, 0, 0));
  assert(rtp_recovery_should_rebase_startup(128, 0, 0));
  assert(rtp_recovery_should_rebase_startup(900, 0, 1));
  assert(!rtp_recovery_should_rebase_startup(900, 0, 2));
  assert(!rtp_recovery_should_rebase_startup(255, 1, 0));
  assert(rtp_recovery_should_rebase_startup(256, 1, 0));
  assert(!rtp_recovery_should_rebase_startup(383, 30, 0));
  assert(rtp_recovery_should_rebase_startup(384, 30, 0));
  assert(rtp_recovery_should_rebase_startup(900, 179, 0));
  assert(!rtp_recovery_should_rebase_startup(900, 180, 0));
  return 0;
}
