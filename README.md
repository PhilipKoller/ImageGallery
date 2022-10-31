# ImageGallery


![gamescollective](https://user-images.githubusercontent.com/97041979/177774974-72f06ebd-7f0e-4300-9aa4-477955807416.gif)

## Install Packages:
run ```yarn install```

## Build Webpack
run ```yarn build```

## Installing database on local machine
$ psql -U {an exisiting role with superuser privileges} blue < dbname.bak

Installing TO remote
download repo to remote and run the local command
OR
$ pg_dump -h localhost -d {database name to copy FROM} | psql -h {remote public address} -d {target database name} -U {name of admin user on remote database}
