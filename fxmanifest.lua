fx_version 'cerulean'

game 'gta5'

version 'bt_target by cortyTV'

dependencies {
    "PolyZone"
}

ui_page 'html/index.html'

client_scripts {
	'@es_extended/imports.lua',
	'@PolyZone/client.lua',
	'@PolyZone/BoxZone.lua',
	'@PolyZone/EntityZone.lua',
	'@PolyZone/CircleZone.lua',
	'@PolyZone/ComboZone.lua',
	'config.lua',
	'client/main.lua',
}

files {
	'html/index.html',
	'html/css/style.css',
	'html/js/script.js'
}
