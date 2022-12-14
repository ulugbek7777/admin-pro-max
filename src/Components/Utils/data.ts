export const usStates: {id: string, name: string}[] = [
    { id: "Alabama", name: "Alabama" },
    { id: "Alaska", name: "Alaska" },
    { id: "Arizona", name: "Arizona" },
    { id: "Arkansas", name: "Arkansas" },
    { id: "California", name: "California" },
    { id: "Colorado", name: "Colorado" },
    { id: "Connecticut", name: "Connecticut" },
    { id: "Delaware", name: "Delaware" },
    { id: "Florida", name: "Florida" },
    { id: "Georgia", name: "Georgia" },
    { id: "Hawaii", name: "Hawaii" },
    { id: "Idaho", name: "Idaho" },
    { id: "Illinois", name: "Illinois" },
    { id: "Indiana", name: "Indiana" },
    { id: "Iowa", name: "Iowa" },
    { id: "Kansas", name: "Kansas" },
    { id: "Kentucky", name: "Kentucky" },
    { id: "Louisiana", name: "Louisiana" },
    { id: "Maine", name: "Maine" },
    { id: "Maryland", name: "Maryland" },
    { id: "Massachusetts", name: "Massachusetts" },
    { id: "Michigan", name: "Michigan" },
    { id: "Minnesota", name: "Minnesota" },
    { id: "Mississippi", name: "Mississippi" },
    { id: "Missouri", name: "Missouri" },
    { id: "Montana", name: "Montana" },
    { id: "Nebraska", name: "Nebraska" },
    { id: "Nevada", name: "Nevada" },
    { id: "New Hampshire", name: "New Hampshire" },
    { id: "New Jersey", name: "New Jersey" },
    { id: "New Mexico", name: "New Mexico" },
    { id: "New York", name: "New York" },
    { id: "North Carolina", name: "North Carolina" },
    { id: "North Dakota", name: "North Dakota" },
    { id: "Ohio", name: "Ohio" },
    { id: "Oklahoma", name: "Oklahoma" },
    { id: "Oregon", name: "Oregon" },
    { id: "Pennsylvania", name: "Pennsylvania" },
    { id: "Rhode Island", name: "Rhode Island" },
    { id: "South Carolina", name: "South Carolina" },
    { id: "South Dakota", name: "South Dakota" },
    { id: "Tennessee", name: "Tennessee" },
    { id: "Texas", name: "Texas" },
    { id: "Utah", name: "Utah" },
    { id: "Vermont", name: "Vermont" },
    { id: "Virginia", name: "Virginia" },
    { id: "Washington", name: "Washington" },
    { id: "West Virginia", name: "West Virginia" },
    { id: "Wisconsin", name: "Wisconsin" },
    { id: "Wyoming", name: "Wyoming" },
];
export const configs: {label: string, case: string}[] = [
    {label: 'pro_features', case: 'driver'},
    {label: 'report_features', case: 'driver'},
    {label: 'pro_features_info', case: 'driver'},
    {label: 'allow_correction', case: 'driver'},
    {label: 'allow_normalize', case: 'driver'},
    {label: 'allow_normalize_new', case: 'driver'},
    {label: 'show_offline_accept_dialog', case: 'driver'},
    {label: 'transfer_to_current', case: 'driver'},
    {label: 'intermediate_worker', case: 'driver'},
    {label: 'log_edit_disabled', case: 'driver'},
    {label: 'reassign', case: 'driver'},
    {label: 'check_dot', case: 'driver'},
    {label: 'allow_direct_edit', case: 'driver'},
    {label: 'allow_dispatcher_accept', case: 'driver'},
    {label: 'allow_bulk_edit', case: 'driver'},
    {label: 'pro_features', case: 'dispatcher'},
    {label: 'report_features', case: 'dispatcher'},
    {label: 'pro_features_info', case: 'dispatcher'},
    {label: 'allow_correction', case: 'dispatcher'},
    {label: 'allow_normalize', case: 'dispatcher'},
    {label: 'allow_normalize_new', case: 'dispatcher'},
    {label: 'show_offline_accept_dialog', case: 'dispatcher'},
    {label: 'transfer_to_current', case: 'dispatcher'},
    {label: 'intermediate_worker', case: 'dispatcher'},
    {label: 'unidentified_enabled', case: 'dispatcher'},
    {label: 'eld_location_enabled', case: 'dispatcher'},
    {label: 'eld_location_enabled2', case: 'dispatcher'},
    {label: 'firmware_update_enabled', case: 'dispatcher'},
    {label: 'app_update_enabled', case: 'dispatcher'},
    {label: 'telegram_logging', case: 'dispatcher'},
    {label: 'driving_speed_reset_eld', case: 'dispatcher'},
    {label: 'odometer_reset_eld', case: 'dispatcher'},
    {label: 'engine_reset_eld', case: 'dispatcher'},
    {label: 'location_reset_eld', case: 'dispatcher'},
    {label: 'gps_speed_enabled', case: 'dispatcher'},
    {label: 'smart_switch_coordinate', case: 'dispatcher'},
    {label: 'pt_gps_speed_enabled', case: 'dispatcher'},
    {label: 'log_note_not_required', case: 'dispatcher'},
    {label: 'log_edit_disabled_new', case: 'dispatcher'},
    {label: 'google_geocode_enabled', case: 'dispatcher'},
    {label: 'log_edit_disabled', case: 'dispatcher'},
    {label: 'reassign', case: 'dispatcher'},
    {label: 'check_dot', case: 'dispatcher'},
    {label: 'allow_direct_edit', case: 'dispatcher'},
    {label: 'allow_dispatcher_accept', case: 'dispatcher'},
    {label: 'allow_bulk_edit', case: 'dispatcher'},
]

export const certifyStatus = [
    { id: "regular", name: "Regular" },
    { id: "certify_on_pti", name: "Certify on PTI" },
    { id: "force_certify_on_pti", name: "Force certify on PTI" },
]

export const coordinatesSource = [
    { id: "fused", name: "Fused" },
    { id: "eld", name: "ELD" },
    { id: "gps", name: "GPS" },
];

export const configNumberInputs = [
    'tracking_frequency',
    'event_filtering_time',
    'video_duration',
    'allocated_space_device',
    'stationary_time',
    'countdown_time',
    'gps_tracking_frequency',
    'zero_speed_time',
    'update_distance',
    'chat_update',
    'min_distance',
]