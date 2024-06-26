/*

To update the name list:

#1. Go to https://sick.oberien.de and then type the category of cards that you want : unique, minor, major, events, etc.

#2. Use the following code in the console.

var imageList = document.querySelectorAll('.front img');
var result = [];
for(var item of imageList){
    result.push(item.src.replace(/.jpg/gi, '').replace(/https:\/\/sick.oberien.de\/imgs\/(powers|events|fears|blights)\//gi, ''));
}
result

#3. Note that currently SICK cannot filter on JUST blight cards, so you may need to manually sanitise the results to exclude
blighted island events if you're adding more blight cards

*/

var unique =["harbingers_of_the_lightning", "boon_of_vigor", "rivers_bounty", "concealing_shadows", "voice_of_thunder","call_of_the_deeps", "swallow_the_landdwellers", "call_on_midnights_dream", "dreams_of_the_dahan",    "fields_choked_with_growth",    "stem_the_flow_of_fresh_water",    "too_near_the_jungle",    "flames_fury",    "threatening_flames",    "unexpected_tigers",    "impersonate_authority",    "flowing_and_silent_forms_dart_by",    "fiery_vengeance",    "the_past_returns_again",    "elemental_teachings",    "share_secrets_of_survival",    "study_the_invaders_fears",    "gather_the_scattered_light_of_stars",    "shape_the_self_anew",    "jagged_shards_push_from_the_earth",    "gift_of_the_untamed_wild",    "pursue_with_scratches_pecks_and_stings",    "a_dreadful_tide_of_scurrying_flesh",    "boon_of_swarming_bedevilment",    "guide_the_way_on_feathered_wings",    "unbearable_deluge",    "travelers_boon",    "paths_tied_by_nature",    "a_circuitous_and_wending_journey",    "boon_of_watchful_guarding",    "whispered_guidance_through_the_night",    "exaltation_of_tangled_growth",    "foul_vapors_and_fetid_muck",    "gift_of_searing_heat",    "gift_of_the_sunlit_air",    "lightnings_boon",    "wash_away",    "favors_called_due",    "mantle_of_dread",    "crops_wither_and_fade",    "draw_of_the_fruitful_earth",    "words_of_warning",    "grasping_tide",    "tidal_boon",    "gift_of_proliferation",    "prey_on_the_builders",    "teeth_gleam_from_darkness",    "terrifying_chase",    "regrow_from_roots",    "boon_of_growing_power",    "gift_of_the_primordial_deeps",    "gift_of_flowing_power",    "elemental_aegis",    "incite_the_mob",    "overenthusiastic_arson",    "lava_flows",    "exaltation_of_molten_stone",    "the_fog_closes_in",    "unnerving_pall",    "plaguebearers",    "absolute_stasis",    "pour_time_sideways",    "blur_the_arc_of_years",    "boon_of_ancient_memories",    "boon_of_reimagining",    "peace_of_the_nighttime_sky",    "stubborn_solidity",    "perils_of_the_deepest_island",    "swallowed_by_the_wilderness",    "evermultiplying_swarm",    "foundations_sink_into_mud",    "gift_of_abundance",    "dark_skies_loose_a_stinging_rain",    "offer_passage_between_worlds",    "ways_of_shore_and_heartland",    "gift_of_furious_might",    "herd_towards_the_lurking_maw",    "mysterious_abductions",    "open_shifting_waterways",    "call_on_herders_for_aid",    "stinging_sandstorm",    "gift_of_windsped_steps",    "scatter_to_the_winds",    "shatter_homesteads",    "flash_floods",    "sudden_ambush",    "predatory_nightmares",    "dread_apparitions",    "overgrow_in_a_night",    "sacrosanct_wilderness",    "flashfires",    "asphyxiating_smoke",    "absorb_essence",    "rain_of_ash",    "dissolving_vapors",    "fetid_breath_spreads_infection",    "strike_low_with_sudden_fevers",    "scarred_and_stony_land",    "plows_shatter_on_rocky_ground",    "softly_beckon_ever_inward",    "aid_from_the_spiritspeakers",    "ferocious_rampage",    "mark_territory_with_scars_and_teeth",    "eerie_noises_and_moving_trees",    "intractable_thickets_and_thorns",    "sweltering_exhaustion",    "tempest_of_leaves_and_branches",    "raging_storm",    "guard_the_healing_land",    "a_year_of_perfect_stillness",    "rituals_of_destruction", "manifestation_of_power_and_glory", "towering_wrath", "pyroclastic_bombardment"]
var minor = ["savage_mawbeasts", "shadows_of_the_burning_forest", "sap_the_strength_of_multitudes", "drift_down_into_slumber", "land_of_haunts_and_embers", "call_to_isolation", "gift_of_constancy", "enticing_splendor", "gift_of_living_energy", "gift_of_power", "gnawing_rootbiters", "lure_of_the_unknown", "rain_of_blood", "reaching_grasp", "golds_allure", "here_there_be_monsters", "portents_of_disaster", "growth_through_sacrifice", "swarming_wasps", "animated_wrackroot", "promises_of_protection", "call_to_ferocity", "twilight_fog_brings_madness", "hazards_spread_across_the_island", "carapaced_land", "call_to_guard", "gift_of_natures_connection", "mesmerized_tranquility", "territorial_strife", "sear_anger_into_the_wild_lands", "strong_and_constant_currents", "sucking_ooze", "terror_turns_to_madness", "treacherous_waterways", "flow_downriver_blow_downwind", "weep_for_what_is_lost", "voracious_growth", "rouse_the_trees_and_stones", "encompassing_ward", "song_of_sanctity", "uncanny_melting", "steam_vents", "veil_the_nights_hunt", "elemental_boon", "devouring_ants", "dark_and_tangled_woods", "natures_resilience", "visions_of_fiery_doom", "pull_beneath_the_hungry_earth", "call_of_the_dahan_ways", "call_to_bloodshed", "call_to_migrate", "call_to_tend", "quicken_the_earths_struggles", "delusions_of_danger", "drought", "entrancing_apparitions", "purifying_flame", "inflame_the_fires_of_life", "fire_in_the_sky", "fleshrot_fever", "guardian_serpents", "infested_aquifers", "poisoned_dew", "prowling_panthers", "renewing_rain", "rites_of_the_lands_rejection", "pact_of_the_joined_hunt", "razorsharp_undergrowth", "scour_the_land", "sky_stretches_to_shore", "absorb_corruption", "call_to_trade", "confounding_mists", "cycles_of_time_and_tide", "disorienting_landscape", "elusive_ambushes", "tormenting_rotflies", "teeming_rivers", "spur_on_with_words_of_fire", "bats_scout_for_raids_by_darkness", "birds_cry_warning", "blood_draws_predators", "desiccating_winds", "dry_wood_explodes_in_smoldering_splinters", "entrap_the_forces_of_corruption", "domesticated_animals_go_berserk", "dire_metamorphosis", "skies_herald_the_season_of_return", "gift_of_twinned_days", "haunted_by_primal_memories", "like_calls_to_like", "unquenchable_flames", "renewing_boon", "scream_disease_into_the_wind", "set_them_on_an_evertwisting_trail", "sunsets_fire_flows_across_the_land", "the_shore_seethes_with_hatred", "thriving_chokefungus", "favor_of_the_sun_and_starlit_dark"]

var major = ["the_trees_and_stones_speak_of_war", "entwined_power", "flow_like_water_reach_like_air", "savage_transformation", "tigers_hunting", "unleash_a_torrent_of_the_selfs_own_essence", "bargains_of_power_and_protection", "poisoned_land", "powerstorm", "the_jungle_hungers", "vigor_of_the_breaking_dawn", "vengeance_of_the_dead", "wrap_in_wings_of_sunlight", "winds_of_rust_and_atrophy", "infinite_vitality", "pentup_calamity", "pyroclastic_flow", "smothering_infestation", "angry_bears", "vanish_softly_away_forgotten_by_all", "settle_into_huntinggrounds", "voice_of_command", "stormswath", "sleep_and_never_waken", "trees_radiate_celestial_brilliance", "thickets_erupt_with_every_touch_of_breeze", "accelerated_rot", "terrifying_nightmares", "paralyzing_fright", "the_land_thrashes_in_furious_pain", "indomitable_claim", "mists_of_oblivion", "dissolve_the_bonds_of_kinship", "strangling_firevine", "bloodwrack_plague", "death_falls_gently_from_open_blossoms", "grant_hatred_a_ravenous_form", "insatiable_hunger_of_the_swarm", "instruments_of_their_own_ruin", "unrelenting_growth", "sweep_into_the_sea", "unlock_the_gates_of_deepest_power", "forests_of_living_obsidian", "infestation_of_venomous_spiders", "walls_of_rock_and_thorn", "the_wounded_wild_turns_on_its_assailants", "utter_a_curse_of_dread_and_bone", "weave_together_the_fabric_of_place", "melt_earth_into_quicksand", "cleansing_floods", "pillar_of_living_flame", "blazing_renewal", "sea_monsters", "twisted_flowers_murmur_ultimatums", "focus_the_lands_anguish", "spill_bitterness_into_the_earth", "talons_of_lightning", "tsunami", "manifest_incarnation", "dream_of_the_untouched_land", "transform_to_a_murderous_darkness", "irresistible_call", "fire_and_flood", "volcanic_eruption", "draw_towards_a_consuming_void", "cast_down_into_the_briny_deep"]

var fear = ["fear_of_the_unseen", "scapegoats", "emigration_accelerates", "dahan_on_their_guard", "tall_tales_of_savagery", "retreat", "dahan_raid", "dahan_enheartened", "avoid_the_dahan", "seek_safety", "wary_of_the_interior", "belief_takes_root", "isolation", "overseas_trade_seems_safer", "trade_suffers", "demoralized", "plan_for_departure", "tread_carefully", "dahan_attack", "explorers_are_reluctant", "immigration_slows", "flee_the_pestilent_land", "quarantine", "too_many_monsters", "panicked_by_wild_beasts", "depart_the_dangerous_land", "unrest", "panic", "discord", "dahan_threaten", "sense_of_dread", "flee_from_dangerous_lands", "dahan_reclaim_fishing_grounds", "beset_by_many_troubles", "nerves_fray", "theological_strife", "angry_mobs", "mimic_the_dahan", "depopulation", "communities_in_disarray", "spreading_timidity"]

var event = ["years_of_little_rain", "farmers_seek_the_dahan_for_aid", "new_species_spread", "war_touches_the_islands_shores", "sacred_sites_under_threat", "outpaced", "missionaries_arrive", "a_strange_madness_among_the_beasts", "seeking_the_interior", "wave_of_reconnaissance", "interesting_discoveries", "strange_tales_attract_explorers", "cultural_assimilation", "investigation_of_dangers", "distant_exploration", "rising_interest_in_the_island", "putting_down_roots", "search_for_new_lands", "invaders_surge_inland", "tightknit_communities", "wellprepared_explorers", "population_rises", "urban_development", "heavy_farming", "promising_farmland", "slave_rebellion", "lesser_spirits_imperiled", "remnants_of_a_spirits_heart", "numinous_crisis", "hardworking_settlers", "dahan_trade_with_the_invaders", "lifes_balance_tilts", "harvest_bounty_harvest_dust", "invested_aristocracy", "mapmakers_chart_the_wild", "no_bravery_without_numbers", "smaller_ports_spring_up", "the_frontier_calls", "seek_new_farmland", "gradual_corruption", "fortuneseekers", "provincial_seat", "cities_rise", "thriving_trade", "wounded_lands_attract_explorers", "coastal_town_multiply", "civic_engagement", "sprawl_contained_by_the_wilds", "the_struggles_of_growth", "eager_explorers", "bureaucrats_adjust_funding", "resourceful_populace", "relentless_optimism", "pull_together_in_adversity", "temporary_truce", "overconfidence"]

var blightedIsland = [
    "downward_spiral",
    "memory_fades_to_dust",
    "back_against_the_wall",
    "promising_farmlands",
    "disintegrating_ecosystem",
    "aid_from_lesser_spirits",
    "tipping_point",
    "erosion_of_will",
    "a_pall_upon_the_land",
    "unnatural_proliferation",
    "all_things_weaken",
    "thriving_communities",
    "power_corrodes_the_spirit",
    "untended_land_crumbles"
]

var stillHealthyIsland = [
    "invaders_find_the_land_to_their_liking",
    "strong_earth_shatters_slowly"
]

var noJE = "";



exports.unique = unique;
exports.minor = minor;
exports.major = major;
exports.power = [].concat(unique).concat(minor).concat(major);
exports.fear = fear;
exports.event = event;
exports.noJE = noJE;
exports.blightedIsland = blightedIsland;
exports.stillHealthyIsland = stillHealthyIsland;
exports.allBlightCards = [].concat(blightedIsland).concat(stillHealthyIsland)
