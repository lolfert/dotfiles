#!/usr/bin/env bash
if pgrep -x "picom" >/dev/null
then
  eval "killall picom"
else
  eval " picom -b --experimental-backend --backend glx"
fi
