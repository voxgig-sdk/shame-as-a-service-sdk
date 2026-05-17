package utility

import "github.com/voxgig-sdk/shame-as-a-service-sdk/go/core"

func featureAddUtil(ctx *core.Context, f core.Feature) {
	client := ctx.Client
	features := client.Features

	client.Features = append(features, f)
}
