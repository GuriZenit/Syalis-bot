{
	module.exports.run = async (client, message, args, embed, config, pref, command) => {
		
		function run (nome){
			require(`./commands/${nome}`).run(client, message, args, embed, config, pref)
		}
		
		switch (command){
			case 'pf':
			case 'perfil':
				run('profile')
				break
			case 'pic':
			case 'foto':
			case 'icon':
			case 'av':
				run('avatar')
		        break

            case 'ajuda':
            case 'comandos':
            case 'commands':
            case 'he':
           	    run('help')
           	    break

           	case 'pong':
           	case 'pingpong':
           	case 'pi':
           	    run('ping')
           		break
           	
           	case 'fale':
           	case 'diga':
           	case 'speak':
           	case 'repeat':
           	case 'repete':
           	case 'sa':
           		run('say')
           		break
           
            case 'delete':
            case 'apagar':
            case 'limpar':
            case 'cl':
            	run('clear')
            	break

            case 'prefixo':
            case 'pr':
            	run('prefix')
            	break

            case 'bemvindo':
            case 'we':
            	run('welcome')
            	break
            	
            case 'configuração':
            case 'definição':
            case 'config':
            case 'se':
                run('settings')
                break
            
            case 'mensagem':
            case 'embed':
            case 'me':
            	run('message')
            	break
           	
		}
	}
}