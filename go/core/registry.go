package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetShameMessageEntityFunc func(client *ShameAsAServiceSDK, entopts map[string]any) ShameAsAServiceEntity

