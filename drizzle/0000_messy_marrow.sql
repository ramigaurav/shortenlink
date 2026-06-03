CREATE TABLE "shortened_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"original_url" text NOT NULL,
	"short_code" text NOT NULL,
	"clicks" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "shortened_links_short_code_unique" UNIQUE("short_code")
);
--> statement-breakpoint
CREATE INDEX "user_id_idx" ON "shortened_links" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "user_created_idx" ON "shortened_links" USING btree ("user_id","created_at");