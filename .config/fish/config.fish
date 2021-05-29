if status is-interactive
and not set -q TMUX
    exec tmux
end

set -U fish_greeting ""
neofetch

alias config='/usr/bin/git --git-dir=/home/luke/.cfg/ --work-tree=/home/luke'
