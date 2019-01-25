import { register } from 'async-ops'
import { defaultOptions, throwExceptionErrors, deserializeJsonResponse } from '../utils/fetch'
import { BASE_API_URL } from '../constants/url'

export const GET_POKEMON = 'getPokemon'

export const service = async name => {
  const url = BASE_API_URL + '/pokemon/' + name + '/'
  const options = {
    ...defaultOptions,
    method: 'GET'
  }
  const response = await window.fetch(url, options)
  const pokemon = await deserializeJsonResponse(response)
  throwExceptionErrors(pokemon)
  return pokemon
}

const mock = request => Promise.resolve({
  'abilities': [
    {
      'ability': {
        'name': 'solar-power',
        'url': 'https://pokeapi.co/api/v2/ability/94/'
      },
      'is_hidden': true,
      'slot': 3
    },
    {
      'ability': {
        'name': 'blaze',
        'url': 'https://pokeapi.co/api/v2/ability/66/'
      },
      'is_hidden': false,
      'slot': 1
    }
  ],
  'base_experience': 240,
  'forms': [
    {
      'name': 'charizard',
      'url': 'https://pokeapi.co/api/v2/pokemon-form/6/'
    }
  ],
  'game_indices': [
    {
      'game_index': 6,
      'version': {
        'name': 'white-2',
        'url': 'https://pokeapi.co/api/v2/version/22/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'black-2',
        'url': 'https://pokeapi.co/api/v2/version/21/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'white',
        'url': 'https://pokeapi.co/api/v2/version/18/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'black',
        'url': 'https://pokeapi.co/api/v2/version/17/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'soulsilver',
        'url': 'https://pokeapi.co/api/v2/version/16/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'heartgold',
        'url': 'https://pokeapi.co/api/v2/version/15/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'platinum',
        'url': 'https://pokeapi.co/api/v2/version/14/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'pearl',
        'url': 'https://pokeapi.co/api/v2/version/13/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'diamond',
        'url': 'https://pokeapi.co/api/v2/version/12/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'leafgreen',
        'url': 'https://pokeapi.co/api/v2/version/11/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'firered',
        'url': 'https://pokeapi.co/api/v2/version/10/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'emerald',
        'url': 'https://pokeapi.co/api/v2/version/9/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'sapphire',
        'url': 'https://pokeapi.co/api/v2/version/8/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'ruby',
        'url': 'https://pokeapi.co/api/v2/version/7/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'crystal',
        'url': 'https://pokeapi.co/api/v2/version/6/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'silver',
        'url': 'https://pokeapi.co/api/v2/version/5/'
      }
    },
    {
      'game_index': 6,
      'version': {
        'name': 'gold',
        'url': 'https://pokeapi.co/api/v2/version/4/'
      }
    },
    {
      'game_index': 180,
      'version': {
        'name': 'yellow',
        'url': 'https://pokeapi.co/api/v2/version/3/'
      }
    },
    {
      'game_index': 180,
      'version': {
        'name': 'blue',
        'url': 'https://pokeapi.co/api/v2/version/2/'
      }
    },
    {
      'game_index': 180,
      'version': {
        'name': 'red',
        'url': 'https://pokeapi.co/api/v2/version/1/'
      }
    }
  ],
  'height': 17,
  'held_items': [],
  'id': 6,
  'is_default': true,
  'location_area_encounters': 'https://pokeapi.co/api/v2/pokemon/6/encounters',
  'moves': [],
  'name': 'charizard',
  'order': 7,
  'species': {
    'name': 'charizard',
    'url': 'https://pokeapi.co/api/v2/pokemon-species/6/'
  },
  'sprites': {
    'back_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
    'back_female': null,
    'back_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
    'back_shiny_female': null,
    'front_default': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    'front_female': null,
    'front_shiny': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png',
    'front_shiny_female': null
  },
  'stats': [
    {
      'base_stat': 100,
      'effort': 0,
      'stat': {
        'name': 'speed',
        'url': 'https://pokeapi.co/api/v2/stat/6/'
      }
    },
    {
      'base_stat': 85,
      'effort': 0,
      'stat': {
        'name': 'special-defense',
        'url': 'https://pokeapi.co/api/v2/stat/5/'
      }
    },
    {
      'base_stat': 109,
      'effort': 3,
      'stat': {
        'name': 'special-attack',
        'url': 'https://pokeapi.co/api/v2/stat/4/'
      }
    },
    {
      'base_stat': 78,
      'effort': 0,
      'stat': {
        'name': 'defense',
        'url': 'https://pokeapi.co/api/v2/stat/3/'
      }
    },
    {
      'base_stat': 84,
      'effort': 0,
      'stat': {
        'name': 'attack',
        'url': 'https://pokeapi.co/api/v2/stat/2/'
      }
    },
    {
      'base_stat': 78,
      'effort': 0,
      'stat': {
        'name': 'hp',
        'url': 'https://pokeapi.co/api/v2/stat/1/'
      }
    }
  ],
  'types': [
    {
      'slot': 2,
      'type': {
        'name': 'flying',
        'url': 'https://pokeapi.co/api/v2/type/3/'
      }
    },
    {
      'slot': 1,
      'type': {
        'name': 'fire',
        'url': 'https://pokeapi.co/api/v2/type/10/'
      }
    }
  ],
  'weight': 905
})

register(GET_POKEMON, service, mock)
