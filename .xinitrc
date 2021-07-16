sh ~/Builds/dwm/dwm-bar/dwm_bar.sh &
xset r rate 225 30 &
xbindkeys &
blueshift -c ~/.config/blueshift/blueshiftrc &
feh --bg-fill --randomize ~/Pictures/Wallpapers/* &
picom --config ~/.config/picom/picom.conf --experimental-backend &
#/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
exec ~/Builds/dwm/dwm
