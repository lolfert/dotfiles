syntax on

set nu
set guicursor=
set tabstop=8 softtabstop=8
set shiftwidth=8
set expandtab
set smartindent
set noerrorbells
set nowrap
set smartcase
set nohlsearch
set hidden
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set incsearch
set scrolloff=8
set signcolumn=yes

call plug#begin('~/.vim/plugged')

Plug 'oblitum/youcompleteme'

call plug#end()

highlight Normal guibg=none
