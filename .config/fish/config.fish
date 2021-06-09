if not set -q TMUX
    set -g TMUX tmux new-session -d -s base
    eval $TMUX
    tmux attach-session -d -t base
end

set -U fish_greeting ""
neofetch

alias config='/usr/bin/git --git-dir=/home/luke/.cfg/ --work-tree=/home/luke'
