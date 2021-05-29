#!/bin/bash

file="/tmp/picom.dat"

read -d $'\x04' name < "$file"

# if we don't have a file, start at zero
if [ ! -f "/tmp/picom.dat" ] ; then
        INACTIVE=0.85
        ACTIVE=0.875

# otherwise read the value from the file
else
        value=`cat /tmp/picom.dat`
fi

# increment the value
value=$((value + 1))

# show it to the user
echo "value: ${value}"

# and save it for next time
echo "${value}" > /tmp/value.dat

INACTIVE=0
ACTIVE=0

set -i "s/^inactive-opacity/inactive-opacity = $INACTIVE"
