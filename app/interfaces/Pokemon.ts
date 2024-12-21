// Interface for the type of a Pokemon (e.g., "grass", "poison")
export interface TPokemonType {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  // Interface for Pokemon's stats (e.g., hp, attack)
export interface TPokemonStat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;  // e.g., "hp", "attack"
      url: string;   // URL to the stat resource
    };
}
  
  // Interface for Pokemon sprites (images)
export interface TPokemonSprites {
    front_default: string; 
    front_shiny: string; 
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
}
  
// Main Pokemon data interface
export default interface TPokemon {
    name: string;
    id: number;                  
    types: TPokemonType[];        
    height: number;              
    weight: number;              
    sprites: TPokemonSprites;     
    stats: TPokemonStat[];   
    abilities: PokemonAbility[];     
}
  