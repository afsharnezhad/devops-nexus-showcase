import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    notionApiKey: '',
    notionDatabaseId: '',
    strapiApiUrl: '',
    webhookUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings saved",
      description: "Your integration settings have been saved.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure your integrations and preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notion Integration</CardTitle>
            <CardDescription>
              Connect your Notion workspace for seamless data synchronization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notionApiKey">Notion API Key</Label>
              <Input
                id="notionApiKey"
                type="password"
                placeholder="secret_xxxxxxxxxxxx"
                value={settings.notionApiKey}
                onChange={(e) => setSettings({ ...settings, notionApiKey: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Get your API key from Notion's integration settings
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notionDatabaseId">Notion Database ID</Label>
              <Input
                id="notionDatabaseId"
                placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                value={settings.notionDatabaseId}
                onChange={(e) => setSettings({ ...settings, notionDatabaseId: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                The ID of your Notion database to sync with
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Strapi Integration</CardTitle>
            <CardDescription>
              Connect to your Strapi CMS for content management
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="strapiApiUrl">Strapi API URL</Label>
              <Input
                id="strapiApiUrl"
                placeholder="https://your-strapi-instance.com/api"
                value={settings.strapiApiUrl}
                onChange={(e) => setSettings({ ...settings, strapiApiUrl: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                The base URL of your Strapi API
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Webhooks</CardTitle>
            <CardDescription>
              Configure webhook endpoints for external integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhookUrl">Webhook URL</Label>
              <Input
                id="webhookUrl"
                placeholder="https://your-webhook-endpoint.com"
                value={settings.webhookUrl}
                onChange={(e) => setSettings({ ...settings, webhookUrl: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Receive notifications when events occur
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Save Settings
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
