#!/usr/bin/env bash
# Mirror ShaadiPath template09 assets into public/assets/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/assets"
BASE="https://pub-1cc0f6e993214be9a36badeeb631f4b6.r2.dev/templates/template09/assets"

mkdir -p "$DEST"

ASSETS=(
  # hero
  hero/pn-hro-bg-courtyard-dark-m-v03.webp
  hero/pn-hro-bg-courtyard-lit-m-v03.webp
  hero/pn-hro-bg-courtyard-dark-D-v03.webp
  hero/pn-hro-bg-courtyard-lit-d-v03.webp
  hero/pn-hro-el-rope-hemp-pull-x-v01.webp
  hero/pn-rvl-btn-lotus-closed-x-v01.webp
  hero/pn-rvl-btn-lotus-open-x-v01.webp
  hero/pn-fx-ovl-lotus-glow-burst-x-v01.webp
  hero/pn-shr-mot-floral-bush-cluster-x-v01.webp
  hero/pn-shr-mot-diya-glow-x-v01.webp
  hero/pn-shr-mot-cow-main-x-v01.webp
  # invite
  invite/pn-inv-fr-card-m-v01.webp
  invite/pn-inv-fr-card-d-v01.webp
  invite/pn-inv-div-lotus-divider-x-v01.webp
  invite/pn-inv-bg-panel-m-v01.webp
  invite/pn-inv-bg-panel-d-v01.webp
  invite/Bird_frames.webp
  invite/petal.webp
  # event
  event/pn-evt-ico-mehendi-x-v01.webp
  event/pn-evt-ico-haldi-x-v01.webp
  event/pn-evt-ico-sangeet-x-v01.webp
  event/pn-evt-ico-shaadi-x-v01.webp
  event/pn-evt-ico-reception-x-v01.webp
  event/pn-evt-ico-vidaai-x-v01.webp
  event/pn-evt-div-lotus-vine-x-v01.webp
  event/pn-evt-pth-ceremonial-vine-m-v01.webp
  event/pn-evt-farman-rolled-x-v01.webp
  event/pn-evt-farman-open-x-v01.webp
  # meet_the_couple
  meet_the_couple/pn-cpl-bg-secret-garden-m-v01.webp
  meet_the_couple/pn-cpl-bg-secret-garden-d-v01.webp
  meet_the_couple/pn-cpl-ovl-tree-left-m-v01.webp
  meet_the_couple/pn-cpl-ovl-tree-right-m-v01.webp
  # gallery
  gallery/pn-gal-bg-hanging-courtyard-m-v01.webp
  gallery/pn-gal-bg-hanging-courtyard-d-v01.webp
  gallery/pn-gal-fr-hanging-landscape-x-v01.webp
  gallery/pn-gal-fr-hanging-portrait-x-v01.webp
  gallery/pn-gal-fr-hanging-hero-arch-x-v01.webp
  # ttk
  ttk/pn-ttk-ico-dress-code-x-v01.webp
  ttk/pn-ttk-ico-venue-x-v01.webp
  ttk/pn-ttk-ico-stay-options-x-v01.webp
  ttk/pn-ttk-ico-hashtag-x-v01.webp
  ttk/pn-ttk-ico-transport-x-v01.webp
  ttk/pn-ttk-ico-gift-registry-x-v01.webp
  ttk/pn-ttk-ico-food-x-v01.webp
  ttk/pn-ttk-ico-weather-x-v01.webp
  ttk/pn-ttk-ico-parking-x-v01.webp
  ttk/pn-ttk-ico-kids-welcome-x-v01.webp
  ttk/pn-ttk-ico-photography-x-v01.webp
  ttk/pn-ttk-ico-whatsapp-group-x-v01.webp
  ttk/pn-ttk-ico-custom-note-x-v01.webp
  # rsvp
  rsvp/pn-rsvp-div-finale-lotus-x-v01.webp
  rsvp/pn-rsvp-bg-royal-finale-m-v01.webp
  rsvp/pn-rsvp-bg-royal-finale-d-v01.webp
  # shared
  shared/pn-shr-mot-jhoomer-hanging-x-v01.webp
  shared/pn-shr-div-floral-corner-top-left-x-v01.webp
  shared/pn-shr-div-floral-corner-top-right-x-v01.webp
  shared/pn-shr-div-floral-border-horizontal-x-v01.webp
  shared/Banaleaf.webp
  shared/pn-shr-mot-peacock-main-x-v01.webp
  shared/Diya.webp
  shared/pn-shr-mot-chhatri-ornate-x-v01.webp
  shared/pn-shr-mot-elephant-main-x-v01.webp
  shared/pn-shr-mot-cow-main-x-v01.webp
  shared/pn-shr-mot-lotus-flower-x-v01.webp
  shared/pn-tex-ovl-watercolor-rose-x-v01.webp
  shared/Menu_background.webp
  shared/music_icon.webp
  shared/compass.webp
  # demo gallery photos
  Demo/Arch_Demo2.webp
  Demo/Arch_demo.webp
  Demo/landscape_demo.webp
  Demo/hero-arch_demo.webp
  # music
  song/Template_09.mp3
)

for rel in "${ASSETS[@]}"; do
  dir="$DEST/$(dirname "$rel")"
  mkdir -p "$dir"
  out="$DEST/$rel"
  if [[ -f "$out" ]]; then
    echo "skip $rel"
    continue
  fi
  echo "fetch $rel"
  if ! curl -fsSL "$BASE/$rel" -o "$out"; then
    echo "WARN: failed $rel" >&2
  fi
done

echo "Done. $(find "$DEST" -type f | wc -l) files in public/assets/"
